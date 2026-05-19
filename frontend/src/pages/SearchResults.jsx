import { useSearchParams } from "react-router-dom";
import products from "../data/products"; // temporary local data

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query),
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Search results for "{query}"</h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No medicines found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-4">
              <img src={item.image} alt={item.name} />
              <h3 className="font-semibold mt-2">{item.name}</h3>
              <p className="text-green-600 font-bold">₹ {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
