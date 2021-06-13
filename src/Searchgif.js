import React from 'react';
import axios from 'axios'
import Random from './Random';

class Searchgif extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true,
        }

    }
    
    

    searchClick= (e) =>{
        e.preventDefault();
        let items=[];
        let userInput = document.getElementById('userInput').value;
        let api = "chpmQql0WVdauVqkuNcDZVE9Ua09xk8H";
        // let url = 'http://api.giphy.com/v1/gifs/search?q='+userInput+'&api_key=YOUR_API_KEY'
        axios.get('http://api.giphy.com/v1/gifs/search?q='+userInput+'&api_key=' + api )
        // .then(response => response.data)
        .then((response) =>{
            console.log(response.data.data)
            response.data.data.map((i)=> items.push(i))
            this.setState({
                loading:false,
                data: response.data,
                data:items
                
                
            })
            console.log(this.state.data)
            
            // console.log("Hello World")
        })
        .catch(error=> console.log(error))

        
        
    }



    render(){

        let results = [];
        results = this.state.data.map((i)=>  <Random gifLink={i.images.original.url}/>)
        console.log(results)
        return(

            
            <div>
                <h1 id="header">Search for Gifs!</h1>
                <div id="input">
                <label>Input to search:</label>
                <br></br>
                <input id="userInput"></input>
                <br></br>
                <button id="submit-button"onClick={this.searchClick}>Submit</button>
                </div>
                <div id="gif-video">
                {results}
                </div>
            </div>
        )
    }
}

export default Searchgif;