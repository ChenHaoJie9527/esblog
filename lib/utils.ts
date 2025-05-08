import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Checks if a pathname is for the Chinese version
 */
export function isChinesePath(pathname: string): boolean {
  console.log(`[isChinesePath] Checking if path is Chinese: ${pathname}`);
  const isChinese = pathname.includes('/page.cn') || pathname.endsWith('/page.cn');
  console.log(`[isChinesePath] Result: ${isChinese}`);
  return isChinese;
}

/**
 * Gets the language version from the pathname
 */
export function getLanguageFromPath(pathname: string): 'en' | 'cn' {
  const language = isChinesePath(pathname) ? 'cn' : 'en';
  console.log(`[getLanguageFromPath] Detected language from path ${pathname}: ${language}`);
  return language;
}

/**
 * Converts a path to its corresponding language version
 */
export function getLanguagePath(pathname: string, language: 'en' | 'cn'): string {
  console.log(`[getLanguagePath] Converting path ${pathname} to ${language}`);
  
  if (language === 'cn' && !isChinesePath(pathname)) {
    // Convert to Chinese path
    if (pathname.includes('/[slug]/')) {
      // Handle dynamic routes
      const newPath = pathname.replace(/\/([^/]+)$/, '/page.cn/$1');
      console.log(`[getLanguagePath] Converted to Chinese (dynamic): ${newPath}`);
      return newPath;
    } else {
      // Handle normal routes
      const newPath = pathname + '/page.cn';
      console.log(`[getLanguagePath] Converted to Chinese (normal): ${newPath}`);
      return newPath;
    }
  } else if (language === 'en' && isChinesePath(pathname)) {
    // Convert to English path
    const newPath = pathname.replace(/\/page\.cn\/?/, '/');
    console.log(`[getLanguagePath] Converted to English: ${newPath}`);
    return newPath;
  }
  
  // Path is already in the correct language
  console.log(`[getLanguagePath] Path is already in correct language: ${pathname}`);
  return pathname;
}
