import React, { Component } from 'react';
import TeamCollapse from './TeamCollapse';
import TeamModal from './TeamModal';

const TeamCard = ({ fetchedTeams }) => {
    return(
        <React.Fragment>
            
            {fetchedTeams.map((team) => {
                return(
                    <div key={team.id} className="col-sm-4">
                        <div className="row searchResultCardText mx-0">
                            <div className = "card border-0 mb-4">
                                <h2>{team.name}</h2>
                            </div>
                            {/* <TeamCollapse team={team}/> */}
                            <TeamModal team={team}/>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default TeamCard;