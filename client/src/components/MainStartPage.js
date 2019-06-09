import React from 'react';
import autobind from 'react-autobind';

class MainStartPage extends React.Component {
    constructor(props) {
        super(props);
        autobind(this);
    }

    render() {
        return (
            <div>Hello</div>
        );
    }
}

export default MainStartPage;