import React from 'react';
import axios from 'axios'
import Random from './Random';

class RandomSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }

    }
    

      
        

    render(){

        
        return(
            <div >
           
                <button id="random"  onClick={this.randomSubmit}>Random Search</button>
                {/* <img>{this.state.url}</img> */}
            <div id="gif-video">
            {results}
            </div>
            </div>
        )
    }
}

export default RandomSearch;