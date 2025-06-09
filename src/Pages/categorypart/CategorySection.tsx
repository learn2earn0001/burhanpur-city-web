// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axois from '@/axois';
// import CategoryGrid from './categor_component/CategoryGrid';
// import ShowMoreModal from './categor_component/ShowMoreModal';
// // import CategoryGrid from './components/CategoryGrid';
// // import ShowMoreModal from './components/ShowMoreModal';

// interface Category {
//   _id?: string;
//   title?: string;
//   name?: string;
//   image: string;
// }

// const MAX_VISIBLE = 10;

// const CategorySection: React.FC = () => {
//   const [data, setData] = useState<Category[]>([]);
//   const [showMore, setShowMore] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     axois
//       .get(`/category/getCategory?ts=${Date.now()}`)
//       .then((res) => {
//         setData(res?.data?.data || []);
//       })
//       .catch((err) => {
//         console.error('Error fetching categories:', err);
//       });
//   }, []);

//   const visibleCategories = data.slice(0, MAX_VISIBLE);
//   const hiddenCategories = data.slice(MAX_VISIBLE);

//   return (
//     <div className="px-4 py-6 relative">
//       <h1 className="text-2xl font-bold mb-6 text-center">Explore Categories</h1>

//       {data.length > 0 ? (
//         <CategoryGrid
//           categories={visibleCategories}
//           onCardClick={(id) => navigate(`/subcategory/${id}`)}
//           onShowMoreClick={() => setShowMore(true)}
//           showMore={hiddenCategories.length > 0}
//         />
//       ) : (
//         <p className="text-center text-gray-500">Loading or No Categories Found</p>
//       )}

//       {showMore && (
//         <ShowMoreModal
//           categories={hiddenCategories}
//           searchTerm={searchTerm}
//           onClose={() => {
//             setShowMore(false);
//             setSearchTerm('');
//           }}
//           onSearch={(val) => setSearchTerm(val)}
//           onCardClick={(id) => navigate(`/subcategory/${id}`)}
//         />
//       )}
//     </div>
//   );
// };

// export default CategorySection;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axois from '@/axois';
import CategoryGrid from './categor_component/CategoryGrid';
import ShowMoreModal from './categor_component/ShowMoreModal';

interface Category {
  _id: string;
  title?: string;
  name?: string;
  image: string;
}

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

  const handleCardClick = (categoryId: string) => {
    navigate(`/subcategory/${categoryId}`);
  };

  return (
    <div className="px-4 py-6 relative">
      <h1 className="text-2xl font-bold mb-6 text-center">Explore Categories</h1>

      {data.length > 0 ? (
        <CategoryGrid
          categories={visibleCategories}
          onCardClick={handleCardClick}
          onShowMoreClick={() => setShowMore(true)}
          showMore={hiddenCategories.length > 0}
        />
      ) : (
        <p className="text-center text-gray-500">Loading or No Categories Found</p>
      )}

      {showMore && (
        <ShowMoreModal
          categories={hiddenCategories}
          searchTerm={searchTerm}
          onClose={() => {
            setShowMore(false);
            setSearchTerm('');
          }}
          onSearch={(val) => setSearchTerm(val)}
          onCardClick={handleCardClick}
        />
      )}
    </div>
  );
};

export default CategorySection;
