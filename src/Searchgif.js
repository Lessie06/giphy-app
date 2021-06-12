import React from 'react';

class Searchgif extends React.Component{
    constructor(props){
        super(props)

    }



    render(){
        return(
            <div>
                <h1>Search for Gifs!</h1>
                <label>Input to search:</label>
                <input></input>
                <button>Submit</button>
            </div>
        )
    }
}

export default Searchgif;