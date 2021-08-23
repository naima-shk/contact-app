import Card from './component/Card.js'
import './App.css';
import React ,{Component} from 'react';



const Contacts = [
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
]

class App extends Component{
   render(){
     return(
       <div>
       <Card contacts={Contacts}/>
       </div>
     )
   }
}
export default App;
