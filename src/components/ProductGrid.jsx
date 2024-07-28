import React, { useContext, useState } from 'react';
import { RecommendationContext } from '../components/RecommendationContext';

const ProductGrid = () => {
  const { recommendations } = useContext(RecommendationContext);
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (event, itemId) => {
    event.preventDefault(); // Prevent default anchor click behavior
    setLikedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId] // Toggle the like status
    }));
  };

  // Check if recommendations have been loaded
  if (recommendations.length === 0) {
    return <div>Loading...</div>;
  }

  // Extract only the first three recommendations if available
  const firstThreeRecommendations = recommendations.slice(0, 3);

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      {firstThreeRecommendations.map((product, index) => (
        <div key={product.article_id} className={index === 0 ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-1"}>
          <a className="relative block aspect-square h-full w-full" href={product.link || '#'} onClick={(e) => e.preventDefault()}>
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <img
                alt={product.prod_name}
                fetchpriority="high"
                decoding="async"
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                src={product.image_url}
              />
              <div className={`absolute bottom-0 left-0 flex w-full px-4 pb-4 ${index === 0 ? "lg:px-20 lg:pb-[35%]" : "@container/label"}`}>
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{product.prod_name}</h3>
                  <button 
                    className={`flex-none rounded-full p-2 text-white ${likedItems[product.article_id] ? 'bg-red-500' : 'bg-blue-600'}`}
                    onClick={(e) => toggleLike(e, product.article_id)}
                  >
                    {likedItems[product.article_id] ? 'Liked' : 'Like'}
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;
