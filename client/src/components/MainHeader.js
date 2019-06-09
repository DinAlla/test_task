import React from 'react';
import {Menu} from "semantic-ui-react";
import {withRouter} from 'react-router-dom';

const MainHeader = ({location, history}) => {
    const clickOnPath = (path) => {
        history.push(`/${path}`);
    };
    return (
        <Menu>
            <Menu.Item onClick={() => clickOnPath('news')}
                       active={location.pathname === 'news'}
            >
                News
            </Menu.Item>
            <Menu.Item onClick={() => clickOnPath('profile')}
                       active={location.pathname === 'profile'}
            >
                Profile
            </Menu.Item>
            <Menu.Item onClick={() => clickOnPath('login')}
                       active={location.pathname === 'login'}
            >
                Log in
            </Menu.Item>
        </Menu>
    );
};

export default withRouter(MainHeader);