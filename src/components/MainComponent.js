import TaskElement from "./TaskElement";
import NewTaskComponent from "./NewTaskComponent";
import { Component } from "react";

export default class MainComponent extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                { id: Math.random(), task: 'Go to gym' },
                { id: Math.random(), task: 'Meet with friends' },
                { id: Math.random(), task: 'Read JS' }
            ]
        }


    }

    onAddClick1 = (task) => {
        this.setState({
            tasks: [...this.state.tasks, {
                id: Math.random(),
                task: task
            }]
        });
    }

    onDeleteClick = (id) => {
        console.log(this.state);
        this.setState({
            tasks: this.state.tasks.filter((el) => {
                return el.id !== id;
            })
        });
    }

    render() {
        return (
            <div className="container">
                <h1>My To Do List</h1>
                <NewTaskComponent onAddClick={this.onAddClick1} />
                <ul>
                    {this.state.tasks.map((task, id) => <TaskElement key={id} task={task} onDeleteClick={this.onDeleteClick} />)}
                </ul>
            </div>
        );
    }
}