import React from 'react';


const Stuff = ({stuff}) =>{
    return (<section>
        <div  className='title'>
            <h2>Are you bored?!</h2>
            <div className='underline'>_________________________________________________</div>
            
            {stuff.map((stuff)=>{
                return <h3>{stuff.activity}</h3>
            })}
        </div>
    </section>);
}

export default Stuff;
