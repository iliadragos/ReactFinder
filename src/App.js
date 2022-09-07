import logo from './logo.svg';
import './App.css';
import { DataSet } from "./users";
import { useState } from 'react';
import Table from './Table';

function App() {
  const [query, setQuery] = useState("");

  console.log(DataSet.filter(user => user.first_name.toLowerCase().includes("ma")))

  const keys = ["first_name", "last_name", "gender", "email"]

  const search = (data) => {
    return data.filter(
      (item) => 
      // item.first_name.toUpperCase().includes(query) ||
      // item.last_name.toUpperCase().includes(query) ||
      // item.gender.toUpperCase().includes(query) ||
      // item.email.toUpperCase().includes(query) ||
      keys.some(key => item[key].toLowerCase().includes(query))
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Title">ReactFinder</p>
      </header>
      
      <main className="App-main">
      <input className='searchBar' type="text" placeholder='Search...' onChange={(e) => setQuery(e.target.value)}></input>
      {/* <ul className='list'>
        {DataSet.filter(user => user.first_name.toLowerCase().includes(query)).map((user) => (
        <li className='listItem' key={user.id}>{user.first_name}</li>
        ))}
      </ul> */}
      <Table data={search(DataSet)}/>
      
      </main>
    </div>
  );
}

export default App;