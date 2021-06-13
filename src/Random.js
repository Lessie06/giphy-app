import React from 'react';

class Random extends React.Component{
    constructor(props){
        super(props);
       
    }



    render(){
        return(
            <div>
               <img id="gif-pic"src={this.props.gifLink}width="150" height="150" ></img>
               
            </div>
        )
        
        
    }
}
export default Random;