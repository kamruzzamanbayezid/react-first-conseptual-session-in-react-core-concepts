import React, { useEffect, useState } from 'react';

const FetchData = () => {

      const [data, setData] = useState([]);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const url = `https://openapi.programming-hero.com/api/videos/category/1000`;
                        const response = await fetch(url);
                        const data = await response.json();
                        setData(data.data)
                  } catch (error) {
                        console.log(error);
                  }
            }

            fetchData()
      }, [])

      console.log(data);


      return (
            <div>
                  <div className='text-center mb-20'>
                        <h1 className='text-center text-3xl my-7'>Fetch Data with Use Effect!!</h1>
                        {
                              data.map((data,index)=> (
                                    <div key={index}>
                                          <h3 className='text-2xl'>{data.title} - {data.category_id}</h3>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      );
};

export default FetchData;