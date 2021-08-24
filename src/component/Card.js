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


          /*<div className="card" style={{width: '16rem'}}>
          <img src={user.picture.medium}   alt="user-img"></img>

        <div class="card-body">

        <h5 className="card-name">Name: {user.name.first} {user.name.last} </h5>
        <h5 className='card-Gender'>Gender: {user.gender} </h5>
        <h5 className='card-email'>Email: {user.email} </h5>
        <h5 className='card-age'>Age: {userAge} </h5>
        <p className='text-center'><button class="btn btn-primary" onClick = {() => setUserAge(user.dob.age)}>Show Age</button></p>

  </div>
      </div>*/
      return (
      <>
        {
        userData.map((user) => (
<div class="card-header" style={{margin: '35px'}}>
      <div class="card mb-3 mx-auto" style={{width: '540px',color: 'green', margin: '45px', padding:'30px'}}>
  <div class="row g-0" >
    <div class="col-md-4">
      <img src={user.picture.large} class="img-fluid rounded-start" alt="user-img"/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{color: 'green'}} >

        <h5 className="card-name">Name: {user.name.first} {user.name.last} </h5>
        <h5 className='card-Gender'>Gender: {user.gender} </h5>
        <h5 className='card-email'>Email: {user.email} </h5>
        <h5 className='card-age'>Age: {userAge} </h5>
        <p className='text-center'><button class="btn btn-primary" onClick = {() => setUserAge(user.dob.age)}>Show Age</button></p>
      </div>
    </div>
  </div>
</div>
</div>



    ))}
      </>
  );}

export default Card
