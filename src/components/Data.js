import React from 'react';

class Data extends React.Component {
    state = {
        teamData: null,
    }

    componentDidMount() {
        return (
            <div>This is returned on mount</div>
        )
    }

    // redner() {
    //     return (
    //         <div>This is returned on mount</div>
    //     )
    // }

}

export default Data;