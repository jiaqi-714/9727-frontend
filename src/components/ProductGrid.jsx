import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      title: 'LIGHT CLOTH TAUPE BRIGHT',
      price: '€139.00',
      imgUrl: 'http://localhost:3000/2.png',
      link: '#'
    },
    {
      title: 'BEANIE - GREY',
      price: '€59.00',
      imgUrl: 'http://localhost:3000/3.png',
      link: '#'
    },
    {
      title: 'KASCHMIR PULLOVER PATENT V-NECK - GRAU WOMEN',
      price: '€279.00',
      imgUrl: 'http://localhost:3000/4.png',
      link: '#'
    },
  ];

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <div className="md:col-span-4 md:row-span-2">
        <a className="relative block aspect-square h-full w-full" href={products[0].link}>
          <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
            <img
              alt={products[0].title}
              fetchpriority="high"
              decoding="async"
              className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
              src={products[0].imgUrl}
            />
            <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label lg:px-20 lg:pb-[35%]">
              <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{products[0].title}</h3>
                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">{products[0].price}<span className="ml-1 inline hidden @[275px]/label:inline">EUR</span></p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="md:col-span-2 md:row-span-1">
        <a className="relative block aspect-square h-full w-full" href={products[1].link}>
          <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
            <img
              alt={products[1].title}
              fetchpriority="high"
              decoding="async"
              className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
              src={products[1].imgUrl}
            />
            <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
              <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{products[1].title}</h3>
                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">{products[1].price}<span className="ml-1 inline hidden @[275px]/label:inline">EUR</span></p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="md:col-span-2 md:row-span-1">
        <a className="relative block aspect-square h-full w-full" href={products[2].link}>
          <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
            <img
              alt={products[2].title}
              loading="lazy"
              decoding="async"
              className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
              style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
              src={products[2].imgUrl}
            />
            <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
              <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{products[2].title}</h3>
                <p className="flex-none rounded-full bg-blue-600 p-2 text-white">{products[2].price}<span className="ml-1 inline hidden @[275px]/label:inline">EUR</span></p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ProductGrid;
