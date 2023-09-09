import React, { useEffect, useState } from 'react';

const UseEffect = () => {

      const [count,setCount] = useState(0)
      const [value,setValue] = useState('Kamruzzaman Bayezid')

      const add =()=> {
            const newCount = count+1
            setCount(newCount)
      }
      const remove = () => {
            const newCount = count - 1
            setCount(newCount)
      }

      const changeName = () =>{
            const newValue = 'But you can call me Bayezid';
            setValue(newValue)
      }

      useEffect(()=>{
            console.log('Use Effect Worked!!');
      },[count])

      return (
            <div className='text-center mb-20'>
                  <h1 className='text-center text-5xl my-7'>Use Effect!!</h1>
                  <h1 className='text-center my-5 text-3xl'>Count: {count}</h1>
                  <button className='btn btn-neutral' onClick={add}>Add</button>
                  <button className='btn btn-neutral ml-2' onClick={remove}>Remove</button>
                  <h3 className='mt-8 mb-3 text-3xl'>Name: {value}</h3>
                  <button onClick={changeName} className='btn btn-warning'>Change</button>
            </div>
      );
};

export default UseEffect;