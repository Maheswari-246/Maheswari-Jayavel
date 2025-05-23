import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h2 className="font-semibold">{item.title}</h2>
        <p>${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="flex gap-2 items-center">
        <button onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item })} className="px-2 bg-gray-300 rounded">-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item })} className="px-2 bg-gray-300 rounded">+</button>
        <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })} className="ml-4 text-red-500">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;