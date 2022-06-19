import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Button,
    ButtonGroup,
} from 'reactstrap';

const Header = ({ sortAtoZ, sortZtoA }) => {

    return (
        <React.Fragment>
            <Navbar color="light" sticky="top" light expand="xs">
            <NavbarBrand href="/">NHL Team Info</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <ButtonGroup>
                        <Button outline onClick={sortAtoZ}>Sort A to Z</Button>
                        <Button outline onClick={sortZtoA}>Sort Z to A</Button>
                    </ButtonGroup>
                </Nav>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;