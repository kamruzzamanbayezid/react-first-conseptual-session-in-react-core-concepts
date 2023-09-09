import React from 'react';

const Card = (product) => {
      console.log(product);
      const titleStyle = {
            color: 'red',
      }
      return (
            <>
                  <div className="card bg-base-100 shadow-xl">
                        <figure>
                              {/* <img src="https://i.ibb.co/QPNzYVy/moonlight.jpg" alt="Shoes" /> */}
                              <img src="./images/pngwing_4.png" alt="" />
                        </figure>
                        <div className="card-body">
                              <h2 className="card-title" style={titleStyle}>{product.product}</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <button className="btn btn-primary">Buy Now</button>
                        </div>
                  </div>
            </>
      );
};

export default Card;