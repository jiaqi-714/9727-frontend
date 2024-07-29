import React, { useContext, useState, useEffect } from 'react';
import { RecommendationContext } from '../components/RecommendationContext';

const Carousel = () => {
  const { recommendations } = useContext(RecommendationContext);
  // Set up a state for liked items, initializing it based on recommendations
  const [likedItems, setLikedItems] = useState({});

  // Update the likedItems state after recommendations have been fetched
  useEffect(() => {
    if (recommendations.length > 0) {
      const initialLikes = recommendations.reduce((acc, item) => {
        acc[item.article_id] = item.liked;  // Use the 'liked' property from each item
        return acc;
      }, {});
      setLikedItems(initialLikes);
    }
  }, [recommendations]);  // Depend on recommendations

  const toggleLike = (event, itemId) => {
    event.preventDefault();  // Prevent default action to avoid scrolling to the top of the page
    setLikedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]  // Toggle the like status
    }));
  };

  if (!recommendations || recommendations.length === 0) {
    return <div>Loading...</div>;
  }

  // Slice the recommendations to start from the 4th item
  const displayedRecommendations = recommendations.slice(3);

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <ul className="flex gap-4">
        {displayedRecommendations.map((product, index) => (
          <li key={index} className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
            <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
              <img
                alt={product.prod_name || 'Item'}
                loading="lazy"
                decoding="async"
                className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                src={product.image_url || 'https://via.placeholder.com/150'}
              />
              <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                  <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{product.garment_group_name || 'Product'}</h3>
                  <button 
                    className={`flex-none rounded-full p-2 text-white ${likedItems[product.article_id] ? 'bg-red-500' : 'bg-blue-600'}`}
                    onClick={(e) => toggleLike(e, product.article_id)}
                  >
                    {likedItems[product.article_id] ? 'Liked' : 'Like'}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
