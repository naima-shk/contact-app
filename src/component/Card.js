import React,{Component} from 'react'

class Card extends Component{
  render(){
  //  console.log('props',this.props)
    return(
      <ol className='card-list'>
      {this.props.contacts.map((contact)=>(
        <li key={contact.id} className='contact-list-item'>
        <div className='contact-avatar'>
        </div>
        <div className='contact-details'>
        <p>  {contact.name}</p>
        <p>  {contact.email}</p>
        </div>
        </li>
      )

      )}
      </ol>
    )
  }
}

export default Card
