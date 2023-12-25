import React from 'react'
import ProductCard from './ProductCard'
import '../../styles/product_card.css'

const ProductList = ({data}) => {
  return (
    <>
    {
      data?.map((item, index)=> (
      <ProductCard item={item} key={index}/>
      ))
    }
      
    </>
  );
}

export default ProductList