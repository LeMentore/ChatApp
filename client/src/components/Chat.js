import React, { Component } from 'react';
import { Provider } from 'react-redux';
import UserList from 'containers/UserList';
import MessagesList from 'containers/MessagesList';
import store from 'store';
import ws from 'util/ws';

window.store = store;
window.ws = ws;

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