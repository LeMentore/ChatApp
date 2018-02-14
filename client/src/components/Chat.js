import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ChatWrap from 'components/ChatWrap';
import store from 'store';
import ws from 'util/ws';

window.store = store;
window.ws = ws;

export default class ChatComponent extends Component {
    render(){
        return(
            <Provider key={Date.now()} store={store}>
                <div className="container clearfix">
                    <ChatWrap />
                </div>
            </Provider>
        )
    }
}