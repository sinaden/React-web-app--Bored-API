import React from 'react';

const List = ({stuff}) => {
  return (
    <>
      {stuff.map((person) =>{
          const{id,name,age,image} = person;
          return <article key={id} className="person">
              <img src={image} alt={name}></img>
              <div>
                  <h4>{name}</h4>
                  <p>{age} years </p>
                  
              </div>

              <div>
                  Hello this is a test to see how things work here. 
              </div>
          </article>
      })}
    </>
  );
};

export default List;
