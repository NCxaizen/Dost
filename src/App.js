import './App.css';
import { Data } from './Data';
import CardList from './CardList';
import SearchBar from './SearchBar';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      searchfield:"",
      userdata:Data
    }
  }

  onSearchEvent=(event)=>{
    this.setState({searchfield:event.target.value})
  }

  render(){
    const {searchfield,userdata}=this.state;
    const filterdata=userdata.filter(user=>{
              return(user.name.toLowerCase().includes(searchfield.toLowerCase()))
    }
    )
    return (
      <div className="App">
        <SearchBar onSearch={this.onSearchEvent}/>
        <CardList Data={filterdata}/>
      </div>
    );
  }
}

export default App;
