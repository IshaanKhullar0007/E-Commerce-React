import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);
    useEffect(()=>{
        const temp = products.filter((item)=>(item.bestseller))
        setBestSeller(temp.slice(0,5))
    },[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className='w-3/4 m-auto text-xs text-gray-600'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam repudiandae saepe laudantium cupiditate ex beatae? Commodi ut quo totam dolore eligendi esse neque quasi, id nostrum, aliquid doloremque cumque delectus molestiae asperiores.
        </p>
        <div className='grid grid-cols-5 gap-4 pt-7'>
            {
                bestSeller.map((item)=>(
                    <ProductItem key={item._id} item={item} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default BestSeller
