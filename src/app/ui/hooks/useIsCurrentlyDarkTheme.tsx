import { useState, useEffect } from "react";

function useIsCurrentlyDarkTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setIsDarkTheme(mediaQuery.matches);

    function handleThemeChange(e: MediaQueryListEvent) {
      setIsDarkTheme(e.matches);
    }

    mediaQuery.addEventListener('change', handleThemeChange);
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return isDarkTheme;
};

export default useIsCurrentlyDarkTheme;
