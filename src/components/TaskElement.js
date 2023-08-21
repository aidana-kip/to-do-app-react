import { Component } from "react";

export default class TaskElement extends Component {


    render() {
        return (
            <li>{this.props.task.task} <button onClick={() => this.props.onDeleteClick(this.props.task.id)}>DELETE</button></li>
        );
    }
}