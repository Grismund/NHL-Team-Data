import './App.css';
import React, { Component } from 'react';
import TeamModal from './components/TeamModal';
import TeamCard from './components/TeamCard';
import Data from './components/Data';

import { Button, Collapse, Alert, Card, CardBody } from 'reactstrap';

class App extends React.Component {

    state = {
      fetchedTeams: [],
    }

    async componentDidMount(){
        const url = `https://statsapi.web.nhl.com/api/v1/teams`;
    
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(`Immediate log after response ${data.teams}`)
            this.setState({
                fetchedTeams: data.teams
            })
            console.log(`Logging the state ${this.state.fetchedTeams}`);
            console.log(`Logging data ${data.teams}`);
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
