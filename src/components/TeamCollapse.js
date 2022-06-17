import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Collapse, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class TeamCollapse extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleGetRequest = this.handleGetRequest.bind(this);
        this.state = { 
            collapse: false,
            unclicked: true,
            teamStats: [],
            teamRanks: [],
        };
        
    }
  
    toggle = () => {
        this.handleGetRequest();
        this.setState({ collapse: !this.state.collapse, unclicked: false});
        // if(this.state.unclicked){
        //     this.handleGetRequest();
        //     console.log(this.props.team.id)
        // }
    };

    handleGetRequest = async () => {
        const id = this.props.team.id
        const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`;
    
        try{
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                teamStats: data.stats[0]
            })
            console.log(`Data from the JSON object response: ${data.stats[0].splits[0].stat.wins}`);
            console.log(`Data from the state: ${this.state.teamStats}`)
        }catch(err){
        console.log(err);
        }; 
        
    };

    render() {
        const team = this.props.team;
        console.log(this.state.teamStats.splits)
        // const stats = this.state.teamStats[0].splits[0].stat;
        // const ranks = this.state.teamStats.stats[1].splits[0].stat;

        

        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                    <CardBody>
                        {team.name}, {team.name}
                        {/* {stats.wins} */}
                    </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}



export default TeamCollapse;