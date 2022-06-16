import React from 'react';
import './style.scss';
import Person1 from './images/person-1.jpg';
import Person2 from './images/person-2.jpg';
import Person3 from './images/person-3.jpg';
import Person4 from './images/person-4.jpg';
import Person5 from './images/person-5.jpg';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.loadItems = this.loadItems.bind(this)
    this.createName = this.createName.bind(this)
    this.clearItems = this.clearItems.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  createName() {
    const adject = ['türkiyeli', 'zaferli', 'militarist', 'y-chpli', 'siyasal islamcı', 'kemalist', 'merkez-sağcı', 'liberal', 'komanist', 'taliban-sever']
    const name = ['canan', 'hilal', 'ebru', 'çetin', 'selo', 'hasan', 'muhammet', 'aylin', 'bora', 'selen']
    const persons = [Person1, Person2, Person3, Person4, Person5]
    const num1 = Math.floor(Math.random() * 10)
    const num2 = Math.floor(Math.random() * 10)
    let fullName = adject[num1] + ' ' + name[num2]

    const age = Math.floor(Math.random() * 20) + 10

    const person = persons[Math.floor(Math.random() * 5)]

    return { fullName, age, person }
  }

  clearItems() {
    const items = document.querySelectorAll('li')
    for (let i of items) {
      i.remove()
    }
  }

  loadItems() {
    return <>
      <Item person={this.createName().person} name={this.createName().fullName} age={this.createName().age} removeItems={this.removeItem} />
      <Item person={this.createName().person} name={this.createName().fullName} age={this.createName().age} removeItems={this.removeItem} />
      <Item person={this.createName().person} name={this.createName().fullName} age={this.createName().age} removeItems={this.removeItem} />
      <Item person={this.createName().person} name={this.createName().fullName} age={this.createName().age} removeItems={this.removeItem} />
      <Item person={this.createName().person} name={this.createName().fullName} age={this.createName().age} removeItems={this.removeItem} />
      <Item person={this.createName().person} name={this.createName().fullName} age={this.createName().age} removeItems={this.removeItem} />
    </>
  }

  removeItem(event){
    event.target.parentNode.remove()
  }

  render() {
    return (
      <div id='container'>
        <div className='reminder'>
          <h1>Birthday Reminder</h1>
          <ul>
            {this.loadItems()}
          </ul>
          <button id='clear' onClick={this.clearItems}>CLEAR ALL</button>
        </div>
      </div>
    )
  }
}

const Item = props => {
  return (
    <li>
      <img src={props.person} alt='person'></img>
      <div>
        <div className='name'>{props.name}</div>
        <div className='age'>{props.age} years</div>
      </div>
      <i className="fa-solid fa-xmark" onClick={props.removeItems}></i>
    </li>
  )
}

export default App;
