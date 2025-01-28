import React from 'react';

const Categories = () => {
  const categories = [
    'HOME',
    'FASHION',
    'JWELLERY',
    'ACCESORIES',
    'MAKEUP',
    'FOOTWARE',
    'SKINCARE',
  ];

  return (
    <div className="flex items-center px-20 mx-10 bg-PaleDogwood text-gray-650 justify-around mt-1 rounded-md p-1 ">
      {categories.map((category, index) => (
        <h1
          key={index}
          className="text-xs text-ChineseViolet hover:text- cursor-pointer" >
          {category}
        </h1>
      ))}
    </div>
  );
};

export default Categories;
