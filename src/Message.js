import React from "react";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: false};
        this.changeDisplay = this.changeDisplay.bind(this);
    }
    
    changeDisplay() {
        this.setState({
            display: !this.state.display
        })
    }
    
    render() {
        const {display} = this.state;
        
        return (
            <React.Fragment>
                <a onClick={this.changeDisplay}>
                    Want to buy a new car?
                </a>
                {display ? 
                    <p>Call +11 22 33 44 now!</p> :
                    null
                }
            </React.Fragment>);
    }
}

export default Message