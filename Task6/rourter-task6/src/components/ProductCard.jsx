import { useCart } from  '../context/CartContext';

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();
  const inCart = cart.find(item => item.id === product.id);

  const toggleCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-500">{product.description.slice(0, 80)}...</p>
      <div className="flex justify-between mt-2">
        <span className="font-bold">${product.price}</span>
        <button onClick={toggleCart} className="px-3 py-1 bg-blue-500 text-white rounded">
          {inCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;