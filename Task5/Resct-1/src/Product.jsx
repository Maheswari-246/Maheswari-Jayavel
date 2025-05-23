import React from 'react';

function Product({ product, addCartBtn,addCart, cartCount }) {
  return (
    <div className="bg-gray-100">
      <nav className="w-full bg-blue-300 p-4 fixed z-[50] mb-6 lg:px-12 flex justify-between">
       <div className=' md:text-2xl text-xl text-black'>Shopping 🛒</div>
       <div>
       <button className=" hover:bg-white  transition-all  transform active:scale-95 mr-10 relative z-50"onClick={()=>{addCart()}}><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#666666"><path d="M480-569.33 433.33-616l70.34-70.67h-177v-66.66h177L433-824l47-46.67L630.67-720 480-569.33ZM286.53-80q-30.86 0-52.7-21.97Q212-123.95 212-154.81q0-30.86 21.98-52.69 21.97-21.83 52.83-21.83t52.69 21.97q21.83 21.98 21.83 52.84 0 30.85-21.97 52.69Q317.38-80 286.53-80Zm402.66 0q-30.86 0-52.69-21.97-21.83-21.98-21.83-52.84 0-30.86 21.97-52.69 21.98-21.83 52.84-21.83 30.85 0 52.69 21.97Q764-185.38 764-154.52q0 30.85-21.97 52.69Q720.05-80 689.19-80ZM54.67-813.33V-880h121l170 362.67H630.8l158.87-280h75L698-489.33q-11 19.33-28.87 30.66-17.88 11.34-39.13 11.34H328.67l-52 96H764v66.66H282.67q-40.11 0-61.06-33-20.94-33-2.28-67L280-496 133.33-813.33H54.67Z"/></svg>
       </button><span className=' absolute z-52  top-10 md:right-18 lg:right-18 right-10 bg-green-400 rounded-full border-white border-1  text-white px-2 '>{cartCount}</span>
       </div>
       </nav>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-14 mx-8 md:mx-16 ">

        {product.map(item => (
          <div key={item.id} className=" p-3 mt-6  w-full ">
            <div className="bg-white h-full p-4  rounded shadow-md flex flex-col justify-between">
              <img  className=" w-1/2 md:w-1/2  h-48 md:h-40  mx-auto mb-2"src={item.image} alt={item.title} />
              <p className='text-sm font-bold mb-2'>{item.title}</p>
              <h2 className='text-base  font-semibold text-gray-600 mb-2 '>${item.price}</h2>
              <button
                className="bg-blue-400 w-full text-sm cursor-pointer rounded shadow-md hover:bg-blue-500 px-4 py-2 text-white transition-all duration-300 transform active:scale-95"
                onClick={() => {
                  addCartBtn(item);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;