import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class TeamModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            unclicked: true,
            wins: null,
            losses: null,
            ot: null,
            winsRank: "",
            status: "status"
        };
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            unclicked: false
        })
    }
    
// This method checks to see if the MORE INFO button has been clicked yet.
// If it has not been clicked, then a GET request is sent to the API to retrive detailed data on only that team, and it is stored in state.
// If the MORE INFO button HAS been clicked, then it only opens the MODAL and renders the data already stored in state.
    handleGetRequest = async () => {
        const id = this.props.team.id
        const url = `https://statsapi.web.nhl.com/api/v1/teams/${id}/stats`;
        
        if(this.state.unclicked) { 
            try{
                const response = await fetch(url);
                const data = await response.json();
                const stat = data.stats[0].splits[0].stat;
                const rank = data.stats[1].splits[0].stat;

                this.setState({
                    wins: stat.wins,
                    losses: stat.losses,
                    ot: stat.ot,
                    winsRank: rank.wins,
                }, 
                    this.toggleModal
                );
                console.log("GET request executed.");
            }catch(err){
                console.log(err);
            }
        } else {
            this.toggleModal();
            console.log("GET request NOT executed.")
        }
        
    };
    
    render() {
        const team = this.props.team;
        const stat = this.state;

        return(
            <React.Fragment>
                <Button color="info" onClick={this.handleGetRequest}>More Info</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>{team.name}</ModalHeader>
                    <ModalBody>
                        <h3>Team Info</h3>
                        <p>You can find the {team.name} at {team.venue.name} in {team.venue.city}. Visit the{" "}
                            <a 
                                href={team.officialSiteUrl} 
                                rel="noopener noreferrer nofollow"
                                target="_blank"
                                >Official Website
                            </a>
                            {" "}for tickets!
                        </p>
                        <h3>Current Record</h3>
                        <ul className="list-unstyled">
                            <li>Rank: {stat.winsRank}</li>
                            <li>Wins: {stat.wins}</li>
                            <li>Losses: {stat.losses}</li>
                            <li>OT: {stat.ot}</li>
                        </ul>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default TeamModal;