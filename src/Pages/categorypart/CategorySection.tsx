import React, { useState, useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axois from '@/axois';
import CategorySearch from './categor_component/CategorySearch';
  

interface Category {
  _id?: string;
  title?: string;
  name?: string;
  image: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3 },
  },
};

const MAX_VISIBLE = 10;

const CategorySection: React.FC = () => {
  const [data, setData] = useState<Category[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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

  const visibleCategories = data.slice(0, MAX_VISIBLE);
  const hiddenCategories = data.slice(MAX_VISIBLE);

  const filteredCategories = hiddenCategories.filter((category) =>
    (category.title || category.name || '')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-4 py-6 relative">
      <h1 className="text-2xl font-bold mb-6 text-center">Explore Categories</h1>

      {data.length > 0 ? (
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {visibleCategories.map((category, index) => (
            <motion.div
              key={category._id || index}
              className="flex flex-col items-center justify-center text-center p-3 bg-white rounded-lg cursor-pointer select-none"
              onClick={() => navigate(`/subcategory/${category._id}`)}
              variants={itemVariants}
              whileHover="hover"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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

          {hiddenCategories.length > 0 && (
            <motion.div
              className="flex flex-col items-center justify-center text-center p-3 bg-gray-100 rounded-lg cursor-pointer select-none hover:bg-gray-200"
              onClick={() => setShowMore(true)}
              variants={itemVariants}
              whileHover="hover"
            >
              <p className="text-sm font-semibold text-blue-600">+ Show More</p>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <p className="text-center text-gray-500">Loading or No Categories Found</p>
      )}

      {/* Modal */}
      {showMore && (
        <div className="fixed inset-0 backdrop-blur-sm bg-transparent z-50 flex items-center justify-end pr-6">
          <div className="bg-white rounded-lg p-6 w-full max-w-5xl max-h-[95vh] shadow-lg overflow-y-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
              <h2 className="text-xl font-semibold">More Categories</h2>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <CategorySearch />
                <button
                  onClick={() => {
                    setShowMore(false);
                    setSearchTerm('');
                  }}
                  className="text-gray-600 hover:text-red-500 text-2xl"
                >
                  &times;
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => (
                  <div
                    key={category._id || index}
                    className="flex flex-col items-center justify-center text-center p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      navigate(`/subcategory/${category._id}`);
                      setShowMore(false);
                      setSearchTerm('');
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
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
