import { Component } from "react";
import UserContext from "../context/UserContext";

class ProfileClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testState: false,
            testState2: true
        }
        console.log("class component profile : constructor");
    }

    componentDidMount() {
        console.log("class component profile :componentDidMount");
    }
    componentDidUpdate() {
        console.log("class component profile :componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("class component profile :componentWillUnmount (left the page) ");
    }

    render() {
        console.log("class component profile :render");

        return (
            <div className=" font-medium text-xl p-6 mb-10" >
                Class component : Profile
                <p>Topic: {this.props.topic}</p>

                <UserContext.Consumer>
                    {(value) => (
                        <p>Consuming context in class component: {value.name} - {value.email}</p>
                    )}
                </UserContext.Consumer>

                <button onClick={() => this.setState({ testState: !this.state.testState })} className="border bg-slate-100 rounded  p-2">Update State</button>
            </div >
        )
    }

}
export default ProfileClassComponent;