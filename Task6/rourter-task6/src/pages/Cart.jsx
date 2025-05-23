import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem'

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = total * 0.10;
  const finalTotal = total - discount;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => <CartItem key={item.id} item={item} />)}
          <div className="mt-6 text-right">
            <p>Total: ${total.toFixed(2)}</p>
            <p>Discount (10%): -${discount.toFixed(2)}</p>
            <h2 className="text-xl font-bold">Final Total: ${finalTotal.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;