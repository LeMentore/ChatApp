import React, { Component } from 'react';
import UserList from 'containers/UserList';
import MessagesList from 'containers/MessagesList';
import authHOC from 'components/authHOC';

class ChatWrap extends Component {
    render(){
        return(
            <div>
                <UserList />
                <MessagesList />
            </div>
        )
    }
}

export default authHOC(ChatWrap);