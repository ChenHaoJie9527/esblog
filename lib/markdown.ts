// 使用服务器端组件标记，确保这些操作只在服务器上执行
'use server';

import fs from 'fs';
import path from 'path';
import { getLanguageFromPath } from './utils';

/**
 * 读取Markdown文件内容
 * 
 * @param filePath Markdown文件路径
 * @returns 文件内容，如果文件不存在则返回null
 */
export async function readMarkdownFile(filePath: string): Promise<string | null> {
  try {
    console.log(`[readMarkdownFile] Trying to read file from: ${filePath}`);
    const fullPath = path.join(process.cwd(), filePath);
    console.log(`[readMarkdownFile] Full path: ${fullPath}`);
    
    if (!fs.existsSync(fullPath)) {
      console.error(`[readMarkdownFile] File does not exist: ${fullPath}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return fileContents;
  } catch (error) {
    console.error(`[readMarkdownFile] Error reading file at ${filePath}:`, error);
    return null;
  }
}

/**
 * 根据当前路径和语言获取对应的Markdown文件内容
 * 
 * @param basePath 基础路径
 * @param pathname 当前页面路径
 * @returns Markdown文件内容
 */
export async function getLocalizedMarkdown(basePath: string, pathname: string): Promise<string | null> {
  console.log(`[getLocalizedMarkdown] Getting content for basePath: ${basePath}, pathname: ${pathname}`);
  
  const language = getLanguageFromPath(pathname);
  console.log(`[getLocalizedMarkdown] Detected language: ${language}`);
  
  const filePath = path.join(basePath, 'page.md');
  console.log(`[getLocalizedMarkdown] Will read from file: ${filePath}`);
  
  const content = await readMarkdownFile(filePath);
  if (!content) {
    console.error(`[getLocalizedMarkdown] No content found from file: ${filePath}`);
    return null;
  }
  
  const extractedContent = extractLanguageContent(content, language);
  console.log(`[getLocalizedMarkdown] Extracted content length: ${extractedContent.length}`);
  
  return extractedContent;
}

// 客户端或无状态部分，不使用 'use server'
/**
 * 从包含中英文内容的Markdown文件中提取指定语言的内容
 * 
 * @param content 完整的Markdown内容
 * @param language 目标语言 ('en' 或 'cn')
 * @returns 指定语言的内容
 */
export function extractLanguageContent(content: string, language: 'en' | 'cn'): string {
  // 检查是否包含中英文标记
  if (!content.includes('<!-- en -->') && !content.includes('<!-- cn -->')) {
    // 如果没有语言标记，返回整个内容（假设是英文）
    console.log(`[extractLanguageContent] No language markers found, returning ${language === 'en' ? 'entire content' : 'empty string'}`);
    return language === 'en' ? content : '';
  }

  const lines = content.split('\n');
  let result = '';
  let currentLanguage: 'en' | 'cn' | null = null;
  
  // 确保标题部分保留在所有语言版本中
  const titleLine = lines.find(line => line.startsWith('# '));
  if (titleLine) {
    result += titleLine + '\n\n';
  }
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === '<!-- en -->') {
      currentLanguage = 'en';
      continue;
    } else if (line === '<!-- cn -->') {
      currentLanguage = 'cn';
      continue;
    } else if (line === '<!-- end -->') {
      currentLanguage = null;
      continue;
    }
    
    // 标题行已经在上面添加过了，这里跳过
    if (line.startsWith('# ')) {
      continue;
    }
    
    if (currentLanguage === language || currentLanguage === null) {
      result += lines[i] + '\n';
    }
  }
  
  return result;
}

/**
 * 从Markdown内容中提取标题和部分
 * 
 * @param content Markdown内容
 * @returns 包含标题和部分的对象
 */
export function parseMarkdown(content: string): { title: string; sections: { heading: string; content: string }[] } {
  const lines = content.split('\n');
  let title = '';
  const sections: { heading: string; content: string }[] = [];
  let currentSection: { heading: string; content: string } | null = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('# ')) {
      // 这是文档标题
      title = line.substring(2).trim();
    } else if (line.startsWith('## ')) {
      // 这是一个新部分
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        heading: line.substring(3).trim(),
        content: '',
      };
    } else if (currentSection) {
      // 向当前部分添加内容
      currentSection.content += line + '\n';
    }
  }

  // 添加最后一个部分
  if (currentSection) {
    sections.push(currentSection);
  }

  return { title, sections };
} 