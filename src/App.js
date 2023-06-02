
import React from "react";
import './App.css';
import { Bars } from 'react-loading-icons'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      nasaList: [],
      isLoading : false

    }
  }
  componentDidMount(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.nasa.gov/planetary/apod/?count=20&api_key=AxM4OjN6eHDSGyeYaze1e5PPwu7fzqT692Yme4FN", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({
          isLoading:true,
          nasaList:result
        })
      })
      .catch(error => console.log('error', error));

  }
  render(){
    const {isLoading, nasaList} = this.state;
    if(isLoading)
    return(
      <Bars />
    )
    return(
      <div>
        {nasaList.map((nasaL) => (
          <h1>{nasaL.date}</h1>
        ))}
      </div>
    )
  }
}

export default App;
