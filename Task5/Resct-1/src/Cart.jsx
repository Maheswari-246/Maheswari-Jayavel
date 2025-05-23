import React from 'react'

function Cart({ cart , removeBtn ,  removeCart} ) {

  const sum=cart.reduce((accumulator,total)=>{return  accumulator+ total.price },0)
  //if item is empty
  return ( <> 
  { cart.length===0 ?( <div className='fixed inset-0 z-[20]  flex justify-center items-center'>
      <div className=" p-4 relative mx-4 md:px-8 w-1/2 md:w-1/2 h-auto max-h-[80%] bg-white rounded-lg shadow-md overflow-y-auto">
      <button onClick={()=>{removeBtn()}} className='bg-red-500 hover:bg-red-600   rounded absolute z-[30]  top-2 right-2 md:top-4 md:right-4 mb-8'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
      <h1 className='text-center text-base md:text-2xl mb-4 mt-8 '>No items added</h1>
        </div>
    </div>) : 
    //if item is not empty
    (<div className='fixed inset-0 z-[20] mt-20  flex justify-center items-center'>
      <div className="w-full p-4 relative mx-4 md:px-8 md:w-1/2 h-auto max-h-[80%] bg-white rounded-lg shadow-md overflow-y-auto">
      <button onClick={()=>{removeBtn()}} className=' bg-red-500 hover:bg-red-600 p-1 rounded absolute z-[30] top-4 right-4 mb-8 '><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>

      <h1 className='text-center text-2xl mb-4 mt-6'>Shopping carts</h1>
      {cart.map((item,index)=>(
        <div key={index}>
            <div  className=" flex justify-between mb-2">
          <p className=' text-sm md:text-base'>{index+1}) {item.title}</p>
          <div className='flex space-x-4'>
          <h2 className='font-semibold'>${item.price}</h2><button onClick={()=>removeCart(item.id)} className=' font-semibold text-red-500 cursor-pointer hover:text-red-700 text-sm md:text-base '> Remove</button>
          </div>
        </div>
        </div>
      ))}
      
      <footer className='mt-6 mb-4'><hr/></footer>
      <div className="flex justify-between mb-4">
      <h1 className='font-semibold text-xl'>Total</h1>
      <h1 className='font-semibold text-xl'>{sum}</h1>
      </div>
        </div>
       
    </div>)
    }
    
    
    </>
  )
}

export default Cart