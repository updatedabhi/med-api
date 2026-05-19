import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQty,
  decrementQty,
} from "../features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items[product.id]);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5">
      <img
        src={product.image}
        alt={product.name}
        className="h-32 mx-auto object-contain"
      />

      <h3 className="mt-4 font-semibold text-gray-800">{product.name}</h3>

      <p className="text-sm text-yellow-500">⭐ {product.rating}</p>

      <div className="flex items-center justify-between mt-4">
        <span className="text-green-600 font-bold">₹ {product.price}</span>

        {!cartItem ? (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700 transition"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-3">
            <button
              onClick={() => dispatch(decrementQty(product.id))}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition"
            >
              <FiMinus />
            </button>

            <span className="font-medium text-gray-800">{cartItem.qty}</span>

            <button
              onClick={() => dispatch(incrementQty(product.id))}
              className="p-2 bg-gray-100 hover:bg-gray-200 rounded transition"
            >
              <FiPlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
