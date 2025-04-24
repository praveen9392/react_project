import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/navbar';
import { Card } from './components/Cards';
import Product from './components/product';
import { products } from './components/data/MockData';
import { useEffect, useState } from 'react';
import Link from './components/Link';
import { Layout } from './Layout';

function App() {
  const { product, setProduct } = useState(products)

  useEffect(() => {
    console.log(products)
    return () => {

    };
  }, []);
  return (
    <>
      {/* <Navigation  /> */}
      <div className=''>
        <Layout>
          <div className="layout">
            <div className="maintext">
              <p>
                <b>Store.</b> The best way to buy the products you love.
              </p>
            </div>
            <div id="linkdata">
              <Link />
            </div>
          </div>
          <div className="slider">
            {products.map((p, i) => {
              return <Product key={i} title={p.value.items[0].value.cardType.contentCard.contentStoreCard.headline} img={p.value.items[0].value.cardType.contentCard.contentStoreCard.cardImage.srcSet.src} />;
            })}
          </div>
        </Layout>
      </div>
    </>
  );
}
export default App;
