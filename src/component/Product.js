import React from 'react';
import './style.css';
import { data } from './ProductData/data.js';
import { Link } from 'react-router-dom';

export default function App() {
  console.log('data', data);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 pt-4">
      {data.map((data1, index) => {
        return (
          <div className="col" key={index}>
            <div className="card" style={{ height: '65%' }}>
              <Link to={`/productdetails/${data1?.id}`}>
              <img src={data1.img} className="card-img-top" alt="..." style={{ height: '65%' }} />
              </Link>
              <div className="card-body">
                <h5 className="card-title text-center logo">{data1?.name}</h5>

                <h6 className="card-title text-center logo">{data1?.price}</h6>
                <p className="card-text h">
                {data1?.des}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
