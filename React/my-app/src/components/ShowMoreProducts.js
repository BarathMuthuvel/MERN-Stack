import React, { useEffect, useState } from "react";

const ShowMoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(5);

  useEffect(() => {
    fetchProducts(0);
  }, []);

  const fetchProducts = async (skipCount) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=5&skip=${skipCount}`
      );
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };

  const handleShowMore = () => {
    fetchProducts(skip);
    setSkip((prevSkip) => prevSkip + 5);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">${product.price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleShowMore}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Show More Products
      </button>
    </div>
  );
};

export default ShowMoreProducts;
