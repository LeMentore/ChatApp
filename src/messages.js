import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="chat">
                {/*<form action="#">*/}
                    {this.props.messages.map(message => {
                        const d = new Date(message.dateTime);
                        return (
                            <p key={message.dateTime} className="message">
                                <span className="message__date">{`${d.getDate()}.${d.getMonth()+1} ${d.getHours()}:${d.getMinutes()}`}</span>
                                <span className="message__author">{message.author}: </span>
                                <span>{message.text}</span>
                            </p>
                        )
                    })}
                    <input ref={(input) => this.input = input} type="text" className="chat__input" />
                {/*</form>*/}
            </div>
        )
    }
}