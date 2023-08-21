import { Component } from "react";

export default class NewTaskComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { task: '' }
    };


    onTaskChange = (event) => {
        this.setState({ task: event.target.value });
    }

    render() {
        return (
            <div className="comp2">
                <input className="inp" type="text" value={this.state.task} onChange={this.onTaskChange} />
                <button className="btn" onClick={() => {
                    this.props.onAddClick(this.state.task);
                    this.setState({ task: '' });
                }}>ADD</button>
            </div>
        );
    }
}
