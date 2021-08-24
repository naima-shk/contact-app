import Card from './component/Card.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import React,{useState ,useEffect}  from 'react';

function App(){

  return(
    <div className='container my-4'>
    Contact List Application
    <Card  />
    </div>
  )
}
export default App;


/*const Contacts = [
  {
    id: 1,
    name: 'Daryl Otoole',
    email: 'daryl.otoole@example.com'

  //  avatarURL: 'http://localhost:5001/tyler.jpg'
  },
  {
    id: 2,
    name: 'Gavin Harris',
    email: 'gavin.harris@example.com'
    //avatarURL: 'http://localhost:5001/karen.jpg'
  },
  {
    id: 3,
    name: 'Sibylla Krenz',
    email: 'sibylla.krenz@example.com'

    //avatarURL: 'http://localhost:5001/richard.jpg'
  },
]*/
