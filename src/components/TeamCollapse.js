import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class TeamCollapse extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleGetRequest = this.handleGetRequest.bind(this);
        this.state = { 
            collapse: false,
            unclicked: true,
            wins: null,
            losses: null,
            ot: null,
            winsRank: "",
            status: "status"
        };
    }

    toggle = () => {
        this.setState(
            { 
                collapse: !this.state.collapse, 
                unclicked: false,
            }
        );
    };

    handleGetRequest = async () => {
        const id = this.props.team.id
        const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`;
        
        if(this.state.unclicked) { 
            try{
                const response = await fetch(url);
                const data = await response.json();
                this.setState({
                    teamStats: data.stats[0],
                    wins: data.stats[0].splits[0].stat.wins,
                    losses: data.stats[0].splits[0].stat.losses,
                    ot: data.stats[0].splits[0].stat.ot,
                    winsRank: data.stats[1].splits[0].stat.wins,
                }, 
                    this.toggle
                );
                console.log("GET executed.");
            }catch(err){
                console.log(err);
            }
        } else {
            this.toggle();
            console.log("GET NOT executed.")
        }
        
    };

    render() {
        const team = this.props.team;
        const stat = this.state;

        return (
            <div>
                <Button color="primary" onClick={this.handleGetRequest} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                    <CardBody>
                        Team Name: {team.name} Wins: {stat.wins}  Losses: {stat.losses} OT: {stat.ot} Rank by Wins: {stat.winsRank}
                    </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}



export default TeamCollapse;