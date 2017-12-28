import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Messages from './messages';
import Users from './users';
// import addNewUser from './actions';

class Chat extends Component {
    render() {
        console.log(this.props);
        return (
            <main className="main-wrapper">
                <Messages messages={this.props.messages} />
                <Users users={this.props.users} addNewUser={this.props.addNewUser} />
            </main>
        );
    }
}

const mapStateToProps = state => ({
    users: state.usersReducer,
    messages: state.messagesReducer
});

const mapDispatchToProps = (dispatch) => ({
   addNewUser: (username) => dispatch({ type: 'ADD_NEW_USER', username})
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
