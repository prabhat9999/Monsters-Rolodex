//import {Component} from 'react'
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box";
import "./App.css";
import { useEffect, useState } from "react"; //local state in func comp.

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  console.log("RENDER");

  const [searchField, setsearchField] = useState("a");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log(searchField);

  const onSearchChange = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase();
    setsearchField(searchValue);
  };

  //wil fire only once, untill dependency array is not getting changed.
  useEffect(() => {
    //effect we want to happen in func comp.
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []); //takes arrow func and array of dependency

  useEffect(() => {
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(filterMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        placeHolder="Search Monsters"
        onSearchChangeHandler={onSearchChange}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component{
// constructor(){
//   super();
//   this.state={
//     monsters:[],
//     searchValue:'',
//     severityValue:''
//   }
//   console.log('1')
// }

// onSearchChange=(event)=>
// {
//  const searchValue=event.target.value.toLocaleLowerCase()
//     this.setState(()=>{
//     return {searchValue}
//     })

//    }

// //only happens once
// componentDidMount(){
//   console.log('3')

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>response.json())
// .then((users)=>{
//   this.setState(()=>{
//     return {monsters:users}
//   },()=>{
//     console.log(this.state.monsters)
//     //console.log(this.state.monsters[0].name)
//   })
// })

// }

// render(){
//   const {monsters,searchValue}=this.state
//   const {onSearchChange}=this
//   console.log('2')
//   const filterMonsters= monsters.filter((monster)=>{
//     return monster.name.toLocaleLowerCase().includes(searchValue)
//    })

//   return (
//     <div className="App">
//       <h1 className='app-title'>Monsters Rolodex</h1>
//       <SearchBox placeHolder="Search Monsters"  onSearchChangeHandler={onSearchChange}/>

//       <CardList monsters={filterMonsters}/>

//  </div>

//   )
// }

// }

export default App;
