import React, { useEffect, useRef } from 'react';

const Carousel = () => {
  const items = [
    { title: 'LORCAN', price: '€69.95' },
    { title: 'LAUREN', price: '€89.95' },
    { title: 'LULABY', price: '€64.95' },
    { title: 'LEXA Denim Blue Bleach', price: '€59.95' },
    { title: 'EFISIO Block Blue', price: '€49.95' },
    { title: 'LORCAN', price: '€69.95' },
    { title: 'LAUREN', price: '€89.95' },
    { title: 'LULABY', price: '€64.95' },
    { title: 'LEXA Denim Blue Bleach', price: '€59.95' },
    { title: 'EFISIO Block Blue', price: '€49.95' },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += 1;
      }
      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    };

    const intervalId = setInterval(autoScroll, 50); // Adjust speed here

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div ref={carouselRef} className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex gap-4">
        {items.map((item, index) => (
          <li key={index} className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
            <a className="relative h-full w-full" href="#">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                <img
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                  style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                  src="https://via.placeholder.com/150"
                />
                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                  <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{item.title}</h3>
                    <p className="flex-none rounded-full bg-blue-600 p-2 text-white">{item.price}<span className="ml-1 inline hidden @[275px]/label:inline">EUR</span></p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
