import {useState,useEffect} from 'react'
// import {Component} from 'react'

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

const App =()=>{
  console.log('render')
  const [searchField,setSearchField] = useState('a')
  const[monsters,setMonsters] = useState([])
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)

  console.log('render')

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users)=>setMonsters(users))
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  },[monsters,searchField])

  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return(
    <div>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
        className='monsters-search-box'
      />

      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();

//     //instantiating state
//     // this.state ={
//     //   name: {firstName: 'Enrico', lastName: 'Zhang'},
//     //   company: 'ZTM'
//     // }
//     this.state={
//       monsters:[],
//       searchField: ''
//     }
//   }

//   //Lifecycle methods
//   // componentDidCatch
//   // componentDidMount
//   // componentWillUnmount
//   // componentDidUpdate

//   componentDidMount(){
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users)=>this.setState(()=>{
//       return{monsters: users}
//     }))
//   }

//   onSearchChange = (event)=>{
//     const searchField = event.target.value.toLocaleLowerCase()
//     this.setState(()=>{
//       return {searchField};
//     })
//   }


//   render(){
//     console.log('render from App.js');

//     const { monsters,searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className="App">

//       <h1 className='app-title'>Monsters Rolodex</h1>



//         <SearchBox 
//         onChangeHandler={onSearchChange} 
//         placeholder='search monsters'
//         className='monsters-search-box'
//          />
//         <CardList monsters={filteredMonsters} />
//         {/* {
//           filteredMonsters.map((monster)=>{
//             return <div key={monster.id}><h1>{monster.name}</h1></div>
//           })
//         } */}
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//           Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
//           </p>
//           <button 
//           // onClick={()=>{
//           //   this.setState({name: {firstName: 'Andrei',lastName: 'Neaogie'}})
//           //   console.log(this.state)
//           // }}
//           onClick={()=>{
//             this.setState(()=>{
//               return{
//                 name: {firstName: 'Andrei',lastName:'Neaogie'}
//               }
//             },()=>{
//               console.log(this.state)
//             })
//           }}
//           >
//             Change Name
//           </button>
//         </header> */}
        
//       </div>
//     );
//   }
  
// }

export default App;
