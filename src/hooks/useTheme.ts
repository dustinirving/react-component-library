import { useCallback, useState } from 'react';

export function useTheme(defaultTheme: 'dark' | 'light' = 'light') {
  const [theme, setTheme] = useState(defaultTheme);

  const updateTheme = useCallback((newTheme: 'dark' | 'light') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      console.log('remove');
      document.documentElement.classList.remove('dark');
    }
    setTheme(newTheme);
  }, []);

  return { updateTheme, theme };
}
