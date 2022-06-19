import React, { Component } from 'react';
import TeamModal from './TeamModal';
import {Card, CardBody, CardHeader, CardText } from 'reactstrap';
import { fadeIn } from 'react-animations'

// maps over the fetchedTeams data and returns a unique Card for each.
// the team data is passed by props to the TeamModal compnenet which handles the MORE INFO button/modal functionality.
const TeamCard = ({ fetchedTeams }) => {
    return(
        <React.Fragment>
            {fetchedTeams.map((team) => {
                return(
                    <div key={team.id} className="col-md-4 col-sm-6">
                        <Card className="card-style">
                            <CardHeader tag="h3">{team.name}</CardHeader>
                            <CardBody>
                                <CardText>
                                    The {team.name} play in the {team.division.name} Division 
                                    of the {team.conference.name} Conference.
                                </CardText>
                                <TeamModal team={team}/>
                            </CardBody>
                        </Card>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default TeamCard;