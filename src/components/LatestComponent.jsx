import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestComponent = () => {
    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProduct] = useState([]);
    useEffect(()=>{
      setLatestProduct(products.slice(0,12));
    },[])
    // console.log(products)
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'}/>
        <p className='w-3/4 m-auto text-xs text-gray-600'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam suscipit ullam blanditiis corporis veniam aliquid ea autem assumenda pariatur animi magnam eaque molestiae aspernatur non, voluptatem numquam fugiat exercitationem alias perferendis, impedit modi unde!
        </p>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {
          latestProducts.map((item)=>(
            <ProductItem key={item._id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestComponent