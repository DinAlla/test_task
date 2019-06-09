import React from 'react';
import autobind from 'react-autobind';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setAllNewsData} from '../actions/commonActionsCreators';

class MainPageView extends React.Component {
    constructor(props) {
        super(props);
        autobind(this);
    }

    componentDidMount() {
        const {actions: {setAllNewsData}} = this.props;
        this.fetchNewsData()
            .then(res => {
                console.log(res);
                setAllNewsData(res.news);
            })
            .catch(err => console.log(err));
    }

    async fetchNewsData() {
        const response = await fetch('/news');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators({
            setAllNewsData
        }, dispatch)
    }
);

export default connect(null, mapDispatchToProps)(MainPageView);