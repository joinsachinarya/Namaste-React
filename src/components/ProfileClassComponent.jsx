import { Component } from "react";

class ProfileClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 0,
            day2: 0
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("left the page");
    }

    render() {
        console.log("render");
        return (
            <h2>
                Class component : Profile
                <p>Topic: {this.props.topic}</p>
                <i>Day: {this.state.day}</i>
                <button onClick={() => this.setState({ day: 1 })}>Change day</button>
            </h2>
        )
    }

}
export default ProfileClassComponent;