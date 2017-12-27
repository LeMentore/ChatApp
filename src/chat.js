import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

class Chat extends Component {
    render() {
        console.log(this.props);
        const randUserName = `@${faker.internet.userName().toLowerCase()}`;
        return (
            <div>
                <h3>chat</h3>
                <button onClick={() => this.props.addNewUser(randUserName)}>
                    add new user
                </button>
                <hr/>
                {this.props.users.map(user => {
                    return <p key={user}>{user}</p>
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
   users: state
});

const mapDispatchToProps = (dispatch) => ({
   addNewUser: (username) => dispatch({ type: 'ADD_NEW_USER', username})
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
