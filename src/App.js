import Card from './component/Card.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App(){

  return(
    <div className='container '>
  <h1 className='text-center' >  Contact-List Application </h1>
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
