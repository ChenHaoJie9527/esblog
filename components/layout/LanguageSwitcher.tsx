'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { isChinesePath } from '@/lib/utils';

export type Language = 'en' | 'cn';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentLang, setCurrentLang] = useState<Language>('en');

  useEffect(() => {
    // 从路径中检测当前语言
    if (isChinesePath(pathname)) {
      setCurrentLang('cn');
    } else {
      setCurrentLang('en');
    }
  }, [pathname]);

  const switchLanguage = (lang: Language) => {
    if (lang === currentLang) return;

    console.log(`[LanguageSwitcher] Switching to ${lang}, current path: ${pathname}`);
    
    let newPath = '';
    
    if (lang === 'cn') {
      // 从英文切换到中文
      if (pathname.includes('/[slug]/')) {
        // 处理动态路由
        newPath = pathname.replace(/\/([^/]+)$/, '/page.cn/$1');
      } else {
        // 处理普通路由
        newPath = pathname + '/page.cn';
      }
    } else {
      // 从中文切换到英文
      newPath = pathname.replace(/\/page\.cn\/?/, '/');
    }
    
    console.log(`[LanguageSwitcher] New path: ${newPath}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage('en')} className={currentLang === 'en' ? 'font-bold' : ''}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage('cn')} className={currentLang === 'cn' ? 'font-bold' : ''}>
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 
