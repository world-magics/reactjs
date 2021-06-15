import React,{useState,useEffect} from 'react';


const Effectss = () => {

    const [count,setCount]=useState(1);

    const [infosType,setInfosType]=useState('users');

// useEffect(() => {
//   document.title = `You ${count} marta bosdingiz`;
// });
useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${infosType}`)
  .then(response => response.json())
  .then(json => console.log(json))
})

    return (
        <div>
            
            {/* <p> Siz {count} marta bosdingiz.</p>

            <button onClick={()=>setCount(count + 1)}>Click This button</button> */}


<button onClick={()=>setInfosType('users')}>Users</ button>
<button onClick={()=>setInfosType('comments')}>Comments</button>
<button onClick={()=>setInfosType('todos')}>Users</button>

        </div>
    );
};



export default Effectss;