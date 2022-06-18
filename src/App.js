import './App.css';
import React, { Component } from 'react';
import TeamModal from './components/TeamModal';
import TeamCard from './components/TeamCard';
import Data from './components/Data';

class App extends React.Component {

    state = {
      fetchedTeams: [],
    }

//Todo: map through the response to only include relevant data, then store it in state, rather than storing entire response.

    async componentDidMount(){
        const url = `https://statsapi.web.nhl.com/api/v1/teams`;
    
        try{
            const response = await fetch(url);
            const data = await response.json();
            
            this.setState({
                fetchedTeams: data.teams,
            })
        }catch(err){
            console.log(err);
        }
    }

    render(){
        return(
            <React.Fragment>
                <TeamCard fetchedTeams={this.state.fetchedTeams}/>
            </React.Fragment>
        )
    }

}



export default App;
