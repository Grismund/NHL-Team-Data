import './App.css';
import React from 'react';
import Header from './components/Header';
import TeamCard from './components/TeamCard';

class App extends React.Component {

    state = {
      fetchedTeams: [
        {
            name: "",
            division: "",
            conference: "",
            venue: "",
            officialSiteUrl: ""
        }
      ]
    }

//Todo: map through the response to only include relevant data, then store it in state, rather than storing entire response.


// When the App loads, it automatically sends a GET request to the API
// It places the data in the state.

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

// These SORT functions sort the state's data in either alphabetical or reverse order.
// These functions are passed by PROPS to onClick button events in the HEADER component.

    sortAtoZ = () => {
        const sortedAtoZ = this.state.fetchedTeams.sort((a, b) => {
            if (a.name < b.name) 
                return -1;
                return 1;
        }); 
        this.setState({fetchedTeams: sortedAtoZ});
        console.log("Sort Button Clicked.", this.state.fetchedTeams)
    }

    sortZtoA = () => {
        const sortedAtoZ = this.state.fetchedTeams.sort((a, b) => {
            if (a.name < b.name) 
                return 1;
                return -1;
        }); 
        this.setState({fetchedTeams: sortedAtoZ});
        console.log("Sort Button Clicked.", this.state.fetchedTeams)
    }

// Renders the Header and the a container with a row to be populated with Cards
    render(){
        return(
            <React.Fragment>
                <Header
                    sortAtoZ={this.sortAtoZ} 
                    sortZtoA={this.sortZtoA} 
                    // clickTest={this.clickTest}
                />
                <div className="container-fluid page ">
                    <div className="row">
                        <TeamCard fetchedTeams={this.state.fetchedTeams}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}



export default App;
