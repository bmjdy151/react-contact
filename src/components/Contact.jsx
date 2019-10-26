import React,{Component} from 'react';

export class Contact extends Component{
  render(){
    console.log("contact",this.props);
    const{name,pictureUrl,popularity} = this.props.person;
    return (
      <div className="contact-container">
        <img src={pictureUrl} alt=""/>
        <p>{name}</p>
        <p>{popularity}</p>
        <button onClick={() => this.props.deletePerson(this.props.index)}>Delete</button>   
      </div>
    );
  }
}