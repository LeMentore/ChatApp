import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
    render(){
        console.log(this.props);
        return(
            <div className="people-list" id="people-list">
                <div className="search">
                    <input type="text" placeholder="search" />
                    <i className="fa fa-search"></i>
                </div>
                <ul className="list">
                    {this.props.users.map(user => {
                        return(
                            <li key={user} className="clearfix">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
                                <div className="about">
                                    <div className="name">{user}</div>
                                    <div className="status">
                                        <i className="fa fa-circle online"></i> online
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)