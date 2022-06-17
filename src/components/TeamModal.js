import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


class TeamModal extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            singleTeam: props.singleTeam
        };
        this.toggleModal = this.toggleModal.bind(this)
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    
    
    render() {
        const singleTeam = this.props.team;
        return(
            <React.Fragment>

                {/* add an onclick to this button to do a fetch request to the second api using props.id/key */}
                <Button onClick={this.toggleModal}>Stats</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>{this.state}</ModalHeader>
                    <ModalBody>
                        <div>"Content to be renered."</div>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        )
    }

}

// const TeamModal = ({ toggleModal }) => {

//     render() {
//         return(
//             <React.Fragment>

//                 {/* add an onclick to this button to do a fetch request to the second api using props.id/key */}
//                 <Button onClick={this.toggleModal}>Open Modal </Button>

//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                     <ModalHeader toggle={this.toggleModal}>TEAM NAME INSERTED HERE</ModalHeader>
//                     <ModalBody>
//                         <div>"Content to be renered."</div>
//                     </ModalBody>
//                 </Modal>

//             </React.Fragment>
//         )
//     }

// }


export default TeamModal;