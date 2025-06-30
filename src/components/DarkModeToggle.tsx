
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    console.log('Saved theme:', savedTheme);
    console.log('System prefers dark:', prefersDark);
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    console.log('Should be dark:', shouldBeDark);
    
    setIsDark(shouldBeDark);
    
    // Ensure DOM is updated immediately
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    
    console.log('Current classes:', document.documentElement.className);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    console.log('Toggling to:', newMode ? 'dark' : 'light');
    
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    
    console.log('After toggle classes:', document.documentElement.className);
  };

  return (
    <Button
      onClick={toggleDarkMode}
      variant="outline"
      size="sm"
      className="pixel-button font-pixel-sans font-bold text-xs no-border bg-card/80 hover:bg-accent/80 backdrop-blur-sm transition-all duration-300"
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 mr-2" />
          Light
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 mr-2" />
          Dark
        </>
      )}
    </Button>
  );
};

export default DarkModeToggle;
