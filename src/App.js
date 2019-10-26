import React,{Component} from 'react';
import contacts from './contacts.json';
import {Contact} from './components/Contact.jsx'
import './App.css';

class App extends Component {
  constructor(){
  super();
  this.state = { 
      people: contacts.slice(0,5),
      clickCount:0,
    };
  }

  randomIndexMapper = () => {
    const length = contacts.length;
    return Math.floor(Math.random() * length) + 5;
  };

  onClickRandom = () => {
    const newCount = this.state.clickCount + 1;
    const randomIndex = this.randomIndexMapper();
    const newPerson = contacts[randomIndex];
    const newPeople = this.state.people.concat(newPerson);
      // const copyOfCurrent = [...this.state.people];
      // copyOfCurrent.push(newPerson)
    this.setState({
      clickCount: newCount,
      people: newPeople
    });
    // this.setState({randomIndex: this.state.randomIndex}); //take the object and set new value
    console.log("click", this.state.clickCount);
    console.log("random", this.state.randomArray);
  }
  onClickNameSort = () => {
    const newPeople = this.state.people.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({
      people: newPeople
    });
    console.log("namSort",this.state.people)
  }
  onClickPopularSort = () => {
    const newPeople = this.state.people.sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0));
    this.setState({
      people: newPeople
    });
    console.log("popSort",this.state.people)
  }
  
  deletePerson = index =>{
    console.log(index);
    const peopleArray = [...this.state.people];
    const people = peopleArray.filter((person,i)=>i !==index)
    this.setState({people});
  }

  render(){
    console.log(this.state.people);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.onClickRandom}>Add Random Contact</button>
        <button onClick={this.onClickNameSort}>Sort by name</button>
        <button onClick={this.onClickPopularSort}>Sort by popularity</button>
        <div className="title-container">
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
          <p>Action</p>
        </div>
        {this.state.people.map( (person,i) =>(
          <Contact key={i} person={person}  index={i} deletePerson={this.deletePerson}/>
        ))} 
      </div>
    );
  }  
}

export default App;
