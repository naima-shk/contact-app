import React,{useState ,useEffect}  from 'react';
function Card(props){

      const[userData, setUserName] = useState([]);
      const[userAge, setUserAge] = useState("");
      useEffect(() => {
          fetch('https://randomuser.me/api/?results=5')
          .then(results => results.json())
          .then(data =>{
              //console.log(data)
              setUserName(data.results);
          });
      },[])
      return (
      <>
        {
        userData.map((user) => (

          <div className="card" style={{width: '16rem'}}>
          <img src={user.picture.medium}   alt="user-img"></img>

        <div class="card-body">

        <h5 className="card-name">Name: {user.name.first} {user.name.last} </h5>
        <h5 className='card-Gender'>Gender: {user.gender} </h5>
        <h5 className='card-email'>Email: {user.email} </h5>
        <h5 className='card-age'>Age: {userAge} </h5>
        <p className='text-center'><button class="btn btn-primary" onClick = {() => setUserAge(user.dob.age)}>Show Age</button></p>
        
  </div>
      </div>))}
      </>
  );}

export default Card
