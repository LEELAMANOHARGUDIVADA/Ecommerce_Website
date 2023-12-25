import React, { useState, useEffect } from 'react';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';
import ProductList from '../components/UI/ProductList';
import useGetData from '../custom-hooks/useGetData';

const Shop = () => {
  const { data: allProducts } = useGetData('products');
  const [productsData, setProductsData] = useState(allProducts);

  useEffect(() => {
    setProductsData(allProducts);
  }, [allProducts]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'all') {
      setProductsData(allProducts);
    } else {
      const filteredProducts = allProducts.filter((item) => item.category === filterValue);
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const searchedProducts = allProducts.filter((item) => item.productName.toLowerCase().includes(searchTerm));
    setProductsData(searchedProducts);
  };

  return (
    <div>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='4'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option value='all'>All Categories</option>
                  <option value='sofa'>Sofa</option>
                  <option value='mobile'>Mobile</option>
                  <option value='chair'>Chair</option>
                  <option value='watch'>Watch</option>
                  <option value='wireless'>Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6'>
              <div className='filter__widget'>
                <select>
                  <option>Sort By</option>
                  <option value='ascending'>Ascending</option>
                  <option value='descending'>Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='search__box'>
                <input type='text' placeholder='Search...' onChange={handleSearch} />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>No products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Shop;
