import { Bars } from 'react-loading-icons'
import React from "react";
import './App.css';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nasaList: [],
      isLoading : true

    };
  }
  componentDidMount(){
    
    fetch("https://api.nasa.gov/planetary/apod/?count=20&api_key=AxM4OjN6eHDSGyeYaze1e5PPwu7fzqT692Yme4FN")
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.setState({
          
          nasaList:result,
          isLoading:false
        })
      })
      

  }
  render(){
    
    const {isLoading, nasaList} = this.state;
    if(isLoading) return(
      <div className="row">
    <Bars stroke='black'/>
    <h1 className='col'>Loading...Please Wait</h1>
    </div>
    );
    return(
      <div className='containter-fluid'>
      <div className='row'>
        <div className='col, text-primary'>
        {nasaList.map((nasaL) => (
          <h1>{nasaL.date}</h1>
        ))}</div>
      </div>
      </div>
    );
  }
}

export default App;
