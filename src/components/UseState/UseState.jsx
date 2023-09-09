import React, { useState } from 'react';

const UseState = () => {

      const [count, setCount] = useState(0);

      const add = () => {
            const newCount = count + 1;
            setCount(newCount);
      }

      const remove = () => {
            const newCount = count - 1;
            setCount(newCount);
      }
      return (
            <div className='text-center mb-20'>
                  <h1 className='text-center text-5xl my-7'>Exploring Hook!!</h1>
                  <h1 className='text-center my-5 text-3xl'>Count: {count}</h1>
                  <button className='btn btn-neutral' onClick={add}>Add</button>
                  <button className='btn btn-neutral ml-2' onClick={remove}>Remove</button>
            </div>
      );
};

export default UseState;