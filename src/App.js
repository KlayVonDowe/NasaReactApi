
import React from "react";
import Error from './Error.js';
import Loading from './Loading.js';
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
      .then(response => {
        if(!response.ok)
        {this.setState({
          nasaList:null,
          isLoading:true
        })}
      else{       
        return response.json()
      }
      })
      .then(result => {
        console.log(result)
        this.setState({          
          nasaList:result,
          isLoading:false
        })
      })
      .catch(error => console.log('error', error));
      

  }
  render(){
    
    const {isLoading, nasaList} = this.state;
    if(isLoading) return(
      <Loading />
    );
    if(nasaList == null){
      return(
        <Error />
      )
    }
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
