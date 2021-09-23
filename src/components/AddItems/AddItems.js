import React, { Component } from 'react';
class Add extends Component {

    state = {

        name: '',
        age: ''

    }

    changed = (e) => {
        this.setState({
            //here we put [e.target.id] that corresponding to (name && age)
            //then we update its value from '' to be the value of the targeted input
            [e.target.id]: e.target.value
        })
    }
    submitNewUser = (e) => {
        e.preventDefault();
        if(e.target.name.value === ''){
            return null;
        }else {
            this.props.addNew(this.state);
            this.setState({
                name: '',
                age: ''
            })
        }
    }

    render() {
        return (
            <div className="add">
                <form onSubmit={this.submitNewUser}>
                    <input value={this.state.name} type="text" placeholder="Enter Course Name .. " id="name" onChange={this.changed} />

                    <input value={this.state.age} type="number" placeholder="Enter Duration .. " id="age" onChange={this.changed} />
                    <input type="submit" value="Add " />
                </form>


            </div>
        );
    }

}

export default Add;
