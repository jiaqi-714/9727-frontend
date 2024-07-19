import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className={`block flex-none ${isOpen ? 'hidden' : ''} md:hidden`}>
        <button
          aria-label="Open mobile menu"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-4/6">
          <a className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6" href="/">
            <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
              <img
                alt="Shopware Composable Frontends Logo"
                loading="lazy"
                width="20"
                height="20"
                decoding="async"
                src="https://www.shopware.com/media/pages/solutions/shopware-frontends/shopware-frontends-intro-graphic-base.svg"
              />
            </div>
          </a>
          <ul className="hidden gap-6 text-sm md:flex md:items-center">
            <li><a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/search/Summer-Trends">Summer Trends</a></li>
            <li><a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/search/Summer-BBQ">Summer BBQ</a></li>
            <li><a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/search/Cooking-pleasure-Provence">Cooking pleasure & Provence</a></li>
            <li><a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/search/Specials-Sale">Specials & Sale</a></li>
            <li><a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/search/CMS">CMS</a></li>
            <li><a className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300" href="/search/Products">Products</a></li>
          </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/6">
          <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
            <input
              type="text"
              placeholder="Search for products..."
              autoComplete="off"
              className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
              name="search"
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </form>
        </div>
        <div className="flex justify-end md:w-1/6">
          <button aria-label="Open cart">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 transition-all ease-in-out hover:scale-110">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
