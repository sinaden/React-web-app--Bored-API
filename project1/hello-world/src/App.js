import React, { useEffect, useState } from 'react';
import Stuff from './Stuff';


function App() {


  const [loading, setLoading] = useState(true);
  // const [people, setPeople] = useState(data);
  const [stuff, setStuff] = useState([]);
  const url = 'https://www.boredapi.com/api/activity';

  function restart(){
    console.log("hello");
    //window.location.reload(false);
    setStuff([]);
    setLoading(true);
    fetchData();
  };
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data1 = await response.json();

    setStuff([data1]);
    setLoading(false);
    console.log(data1);
  };

  useEffect(()=>{
    fetchData();
  },[]);

  if(loading) {
    return <main>
    <section  className='container'>
      <h3>Loading ... </h3>
      {/* <button onClick={restart}> Endthe load
      </button> */}
    </section>
    
    </main>;
  }

  return (<main>
    <section  className='container'>
      
       <Stuff stuff = {stuff}> </Stuff>
       <button onClick={restart}> Still bored? </button>
     </section>
    
  </main>);

  // return <main>
  //   <section  className='container'>
  //     <h3>{people.length} tweets today!</h3>
  //     <List stuff = {people}></List>
  //     <button onClick={() => setPeople([])}> Clear All</button>
  //   </section>
    
  //   </main>;
}

export default App;







// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           eeeeeee
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
