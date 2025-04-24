import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/navbar';
import { Card } from './components/Cards';
import Product from './components/product';
import { products } from './components/data/MockData';
import { useEffect, useState } from 'react';

function App() {
  const {product,setProduct} = useState(products)

  useEffect(() => {
    console.log(products)
   return()=>{
    
   };
  },[]);
  return (
    <>
      {/* <Navigation  /> */}
      <div className="layout">
        <div className="maintext">
          <p>
            <b>Store.</b> The best way to buy the products you love.
          </p>
        </div>
      </div>
      <div className='slider'>
        <Product img="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202502?wid=400&hei=260&fmt=png-alpha&.v=1738706422726"/>
      </div>
    </>
  );
}
export default App;
