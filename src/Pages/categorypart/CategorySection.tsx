import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import axois from '@/axois';
import { useNavigate } from 'react-router-dom';

interface Category {
  _id?: string;
  title?: string;
  name?: string;
  image: string;
}

const MAX_VISIBLE = 10;

const CategorySection: React.FC = () => {
  const [data, setData] = useState<Category[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    axois
      .get(`/category/getCategory?ts=${Date.now()}`)
      .then((res) => {
        setData(res?.data?.data || []);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }, []);

  const startAutoScroll = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);

    scrollIntervalRef.current = setInterval(() => {
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    }, 30);
  };

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  const pauseAndResumeScroll = () => {
    stopAutoScroll();
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 3000);
  };

  useEffect(() => {
    if (!showMore) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [showMore, data]);

  const visibleCategories = data.slice(0, MAX_VISIBLE);
  const hiddenCategories = data.slice(MAX_VISIBLE);

  const filteredCategories = hiddenCategories.filter((category) =>
    (category.title || category.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeModal = () => {
    setShowMore(false);
    setSearchTerm('');
    setTimeout(() => {
      startAutoScroll();
    }, 100);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  return (
    <>
      {/* Embedded style for scrollbar hide */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      <div className="px-4 py-6 relative">
        <h1 className="text-2xl font-bold mb-6 text-center">Explore Categories</h1>

        <div className={showMore ? 'blur-sm pointer-events-none select-none' : ''}>
          {!showMore && (
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide"
              style={{
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
              }}
              onMouseEnter={pauseAndResumeScroll}
              onMouseLeave={() => {
                if (!showMore) startAutoScroll();
              }}
            >
              {visibleCategories.map((category, index) => (
                <motion.div
                  key={category._id || index}
                  className="flex-shrink-0 w-28 flex flex-col items-center justify-center text-center p-3 bg-white rounded-lg cursor-pointer select-none"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => {
                    pauseAndResumeScroll();
                    navigate(`/subcategory/${category._id}`);
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.title || 'category'}
                    className="w-12 h-12 object-contain mb-2"
                  />
                  <p className="text-sm font-semibold text-gray-800">
                    {category.title || category.name}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {hiddenCategories.length > 0 && !showMore && (
            <div className="text-center mt-6">
              <button
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium"
                onClick={() => {
                  stopAutoScroll();
                  setShowMore(true);
                }}
              >
                Show More
              </button>
            </div>
          )}
        </div>

        {/* Modal */}
        {showMore && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-6xl w-full max-h-[80vh] overflow-auto p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>

              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded mb-4"
                autoFocus
              />

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category, index) => (
                    <div
                      key={category._id || index}
                      className="flex flex-col items-center justify-center text-center p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        navigate(`/subcategory/${category._id}`);
                        closeModal();
                      }}
                    >
                      <img
                        src={category.image}
                        alt={category.title || 'category'}
                        className="w-12 h-12 object-contain mb-2"
                      />
                      <p className="text-xs font-semibold text-gray-800">
                        {category.title || category.name}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500">No categories found</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default CategorySection;
