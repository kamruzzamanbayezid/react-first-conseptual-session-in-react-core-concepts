import React, { useState } from 'react';

const Remove = () => {

      const persons = [
            { id: 1, name: 'Abdul' },
            { id: 2, name: 'Fatima' },
            { id: 3, name: 'Rahim' },
            { id: 4, name: 'Amina' },
            { id: 5, name: 'Karim' },
            { id: 6, name: 'Nasrin' },
            { id: 7, name: 'Shahid' },
            { id: 8, name: 'Tahmina' },
            { id: 9, name: 'Ismail' },
            { id: 10, name: 'Shirin' },
      ];

      const [person, setPerson] = useState(persons);
      console.log(person);

      function removeAll() {
            setPerson([]);
      }

      function removeSingle(id) {
            const filteredItem = person.filter(p=> p.id !== id)
            setPerson(filteredItem)
      }


      return (
            <div className='text-center text-3xl'>
                  {
                        person && person.map((person, index) => (
                              <div key={index}>
                                    <h1>Name: {person.name}</h1>
                                    <button onClick={() => removeSingle(person.id)} className='btn btn-neutral btn-sm'>remove</button>
                              </div>
                        ))
                  }
                  <button onClick={removeAll} className='btn btn-error'>Remove All</button>
            </div>
      );
};

export default Remove;