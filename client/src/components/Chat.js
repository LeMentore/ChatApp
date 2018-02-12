import React, { Component } from 'react';
import { Provider } from 'react-redux';
import UserList from 'containers/UserList';
import MessagesList from 'containers/MessagesList';
import store from 'store';
window.store = store;

export default class ChatComponent extends Component {
    render(){
        return(
            <Provider key={Date.now()} store={store}>
                <div className="container clearfix">
                    <UserList />
                    <MessagesList />
                </div>
            </Provider>
        )
    }
}