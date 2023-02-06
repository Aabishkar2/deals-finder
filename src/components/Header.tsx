import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header() {
  const [theme, setTheme] = useState('');

  // for dark mode
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('theme') as string);
    // if not theme and user OS is dark mode
    if (
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      theme === 'dark'
    ) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === 'light') {
      localStorage.setItem('theme', JSON.stringify('dark'));
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', JSON.stringify('light'));
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <>
      <header className="mx-auto lg:w-3/4">
        <div className="flex justify-between p-3">
          <Link href="/">
            <div className="text-lg font-bold dark:text-white lg:tracking-wider">
              Deals Finder
            </div>
          </Link>
          <div className="">
            <button
              onClick={toggleTheme}
              className="source-sans-pro dark:border-lite dark:hover:bg-lite rounded border border-green-700 bg-transparent px-3 py-2 font-normal hover:border-transparent hover:bg-green-500 hover:text-white dark:text-white md:px-5 lg:px-5"
            >
              {theme === 'dark' ? (
                <div className="text-white">Light</div>
              ) : (
                <div className="text-darker">Dark</div>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
