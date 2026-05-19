import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const mockProducts = Array.from({ length: 20 }, (_, index) => ({
    ...products[0],
    id: index + 1,
  }));

  const ITEMS_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = mockProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <main className="bg-gray-100">
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Popular Medicines
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.slice(0, 4).map((product) => (
            <ProductCard key={`popular-${product.id}`} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Cold & Fever
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.slice(4, 8).map((product) => (
            <ProductCard key={`cold-${product.id}`} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          All Medicines
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentItems.map((product) => (
            <ProductCard key={`all-${product.id}`} product={product} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg border text-sm transition ${
                  currentPage === page
                    ? "bg-green-600 text-white border-green-600 shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:border-gray-300"
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-4 py-2 rounded-lg border text-sm bg-white text-gray-700 hover:bg-gray-100 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next →
          </button>
        </div>
      </section>
    </main>
  );
}

export default Home;
