import {Component} from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    //instantiating state
    // this.state ={
    //   name: {firstName: 'Enrico', lastName: 'Zhang'},
    //   company: 'ZTM'
    // }
    this.state={
      monsters:[],
    }
    console.log('constructor');
  }

  //Lifecycle methods
  // componentDidCatch
  // componentDidMount
  // componentWillUnmount
  // componentDidUpdate

  componentDidMount(){
    console.log('component');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=>this.setState(()=>{
      return{monsters: users}
    },()=>{
      console.log(this.state)
    }))
  }


  render(){
    console.log('render');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters'
        onChange={(event)=>{
          const searchString = event.target.value.toLocaleLowerCase()
          const filteredMonsters = this.state.monsters.filter((monster)=>{
            return monster.name.toLocaleLowerCase().includes(searchString)
          })

          this.setState(()=>{
            return {monsters: filteredMonsters};
          })
          // this.state.monsters.filter((event.target.value)=>{target.value.includes(target.name)}).map((monster)=>{
          //   return <div key={monster.id}>{monster.name}</div>
          // })
        }}
         />

        {
          this.state.monsters.map((monster)=>{
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
          </p>
          <button 
          // onClick={()=>{
          //   this.setState({name: {firstName: 'Andrei',lastName: 'Neaogie'}})
          //   console.log(this.state)
          // }}
          onClick={()=>{
            this.setState(()=>{
              return{
                name: {firstName: 'Andrei',lastName:'Neaogie'}
              }
            },()=>{
              console.log(this.state)
            })
          }}
          >
            Change Name
          </button>
        </header> */}
        
      </div>
    );
  }
  
}

export default App;
