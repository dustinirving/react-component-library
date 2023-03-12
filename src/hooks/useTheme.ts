import { useCallback, useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    updateTheme('dark');
  }, []);

  const updateTheme = useCallback((newTheme: 'dark' | 'light') => {
    if (newTheme === 'dark') {
      console.log('add');
      document.documentElement.classList.add('dark');
    } else {
      console.log('remove');
      document.documentElement.classList.remove('dark');
    }
    setTheme(newTheme);
  }, []);

  return { updateTheme, theme };
}
