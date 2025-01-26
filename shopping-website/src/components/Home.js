import React from "react";

function Home({ addToCart, products }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="border  rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition-shadow"
            >
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default Home;
