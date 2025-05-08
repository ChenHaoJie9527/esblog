const fs = require('fs');
const path = require('path');

/**
 * 合并英文和中文Markdown文件为单一的双语Markdown文件
 * 
 * @param enFilePath 英文文件路径
 * @param cnFilePath 中文文件路径
 * @param outputPath 输出文件路径
 */
function mergeMarkdownFiles(enFilePath: string, cnFilePath: string, outputPath: string): void {
  try {
    // 读取文件内容
    const enContent = fs.readFileSync(enFilePath, 'utf8');
    const cnContent = fs.readFileSync(cnFilePath, 'utf8');
    
    // 分割内容为标题和部分
    const enSections = splitMarkdownIntoSections(enContent);
    const cnSections = splitMarkdownIntoSections(cnContent);
    
    // 合并内容
    let mergedContent = `# ${enSections.title}\n\n`;
    
    // 处理每个部分
    for (let i = 0; i < enSections.sections.length; i++) {
      const enSection = enSections.sections[i];
      const cnSection = cnSections.sections.find((s: any) => s.heading === enSection.heading) || 
                       cnSections.sections[i] || 
                       { heading: enSection.heading, content: '' };
      
      mergedContent += `## ${enSection.heading}\n\n`;
      mergedContent += `<!-- en -->\n${enSection.content.trim()}\n<!-- end -->\n\n`;
      mergedContent += `<!-- cn -->\n${cnSection.content.trim()}\n<!-- end -->\n\n`;
    }
    
    // 写入输出文件
    fs.writeFileSync(outputPath, mergedContent.trim());
    console.log(`成功合并文件到: ${outputPath}`);
  } catch (error) {
    console.error(`合并文件时出错:`, error);
  }
}

/**
 * 将Markdown内容分割为标题和部分
 */
function splitMarkdownIntoSections(content: string): { title: string; sections: { heading: string; content: string }[] } {
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

/**
 * 递归查找和合并Markdown文件
 */
function processDirectory(directory: string): void {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      if (entry.name === 'page.cn') {
        // 找到中文目录，检查是否有对应的英文文件
        const cnFilePath = path.join(fullPath, 'page.md');
        const parentDir = path.dirname(directory);
        const enFilePath = path.join(directory, 'page.md'); // 修正：英文文件应该在当前目录
        const outputPath = path.join(directory, 'page.md'); // 修正：输出文件应该在当前目录
        
        if (fs.existsSync(cnFilePath) && fs.existsSync(enFilePath)) {
          mergeMarkdownFiles(enFilePath, cnFilePath, outputPath);
          
          // 备份中文文件，以防万一
          const backupPath = path.join(fullPath, 'page.md.bak');
          fs.copyFileSync(cnFilePath, backupPath);
          console.log(`备份中文文件到: ${backupPath}`);
        }
      } else {
        // 递归处理子目录
        processDirectory(fullPath);
      }
    }
  }
}

// 设置根目录
const rootDir = path.join(process.cwd(), 'app');
console.log(`开始处理文件，根目录: ${rootDir}`);
processDirectory(rootDir);
console.log('处理完成！'); 