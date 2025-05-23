import { useEffect, useState } from 'react'
import './App.css'
import Product from './Product'
import Cart from './Cart'

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("error");
      }
    }

    fetchProducts();
  }, []);

  // useEffect(() => {
  //   console.log("Cart count updated:", cartCount);
  // }, [cartCount]);

  if (loading) {
    return <h1>loading....</h1>;
  }

 
  const addCartBtn = (message) => {
    const itemExists = carts.find(cartItem => cartItem.id === message.id); // we have to use find method to find the cart item . we can add 1 item. if we click the same card item we'll get a alert message
    if (itemExists) {
      alert("Item already added to the cart");
    } else {
      setCarts((prevCarts) =>{
        const newCarts= [...prevCarts, message]   //initial it will be[] array then when i click the card it add then it add prev also 
      setCartCount(newCarts.length); // dynamically add the carts count 
      return newCarts
    }) }
   
    
  }

  const addCart=()=>{
 setShowCart(true)

  }
   const removeBtn=()=>{
    setShowCart(false)
   }

   const removeCart=(id)=>{
  
    const update=carts.filter((store)=>store.id !==id)// delete the carts
    setCarts(update);
    setCartCount(update.length);
   }
  return (
    <>
    {showCart &&  ( <div className="bg-black opacity-50 fixed inset-0 z-[5]"></div> //showcart is true it show popup
      )}

      <Product product={products} addCartBtn={addCartBtn} cartCount={cartCount} addCart={addCart} /> 
      {showCart && <Cart cart={carts} removeBtn={removeBtn}  removeCart={ removeCart} />} {/* showcart is false when i click the remove button the popup will hide  */}
      
    </>
  );
}

export default App;