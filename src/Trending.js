import React from 'react';
import axios from 'axios'
import Random from './Random'

class TrendingSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            loading:true
        }
    }

    // trendSubmit= (e) =>{
    //     e.preventDefault();

    //     let items = [];
    //     let apiKey = "chpmQql0WVdauVqkuNcDZVE9Ua09xk8H";
    //     axios.get("http://api.giphy.com/v1/gifs/trending?api_key=" + apiKey )
    //     // .then(response => response.data)
    //     .then((response) =>{
    //          response.data.data.map((i)=> items.push(i))
    //         this.setState({
    //             loading:false,
    //             data: response.data,
    //             data:items
                
    //         })
    //         console.log(this.state.data)
            
    //         // console.log("Hello World")
    //     })
    //     .catch(error=> console.log(error))
        

        
        
    // }

    componentDidMount(){
        // e.preventDefault();

        let items = [];
        let apiKey = "chpmQql0WVdauVqkuNcDZVE9Ua09xk8H";
        axios.get("http://api.giphy.com/v1/gifs/trending?api_key=" + apiKey )
        // .then(response => response.data)
        .then((response) =>{
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
        // let results=[];
        // results = this.state.data.map((i)=>  <Random gifLink={i.images.original.url}/>)
        // console.log(results)
        let results = [];
        results = this.state.data.map((i)=>  <Random gifLink={i.images.original.url}/>)
        console.log(results)

        return(
            <div>
                <h2 id="trending">Trending Gifs:</h2>
                {/* <button id="trending" onClick={this.trendSubmit}>Trending Search</button> */}
                <div id="gif-video">
                {results}
                </div>
                

            </div>
        )
    }
}

export default TrendingSearch;