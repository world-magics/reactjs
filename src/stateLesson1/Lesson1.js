import React from 'react'

class Lesson1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {  
            name:"Sherzod",
            age:23,
            job:"Frontend Developer",    
            date: new Date()

        };
    }

    render() {
        return (
            <>
                <h1>My name is {this.state.name}</h1>
                <p>he is {this.state.age} years old.</p>

                <h2>he is {this.state.job}</h2>
                <h2>Time: {this.state.date.toTimeString()}</h2>

            </>
        )
    }
}

export default Lesson1