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
    randomSubmit = (e) => {
        e.preventDefault();
      
        let apiKey = "chpmQql0WVdauVqkuNcDZVE9Ua09xk8H";
        axios
          .get("http://api.giphy.com/v1/gifs/random?api_key=" + apiKey)
          // .then(response => response.data)
      
          .then((response) => {
            console.log(response.data.data);
            // response.data.data.map((i)=> items.push(i))
            this.setState({
              loading: false,
              data: response.data.data
              // data:items
            });
            console.log(response.data.data);
      
            // console.log("Hello World")
          })
          .catch((error) => {
            console.log(error);
            this.setState = {
              loading: true
            };
          });
      };
    

      
        

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