import { Bars } from 'react-loading-icons'
import React from 'react';
class Loading extends React.Component{
    render(){
        return(
            <div className="row">
            <Bars stroke='black'/>
            <h1 className='text-center'>Loading...Please Wait</h1>
            </div>
        )
    }
}
export default Loading;