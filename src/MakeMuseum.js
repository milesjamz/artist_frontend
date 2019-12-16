import React from 'react';

class MakeMuseum extends React.Component {

state = {
    name: '',
    description: '',
    city: '',
    coords: '',
    image: ''
}

handleChange = (e) => {
    const target = e.target
        const value = target.value
            const name = target.name
    this.setState({ [name]: value })
}

handleOnSubmit = e => {
    e.preventDefault()
    const newMuseum = {
        coords: this.state.coords,
        name: this.state.name,
        image:this.state.image,
        description: this.state.description,
        city: this.state.city
    }
    fetch('http://localhost:3000/api/v1/museums', {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({museum: newMuseum})
    }).then(res => res.json())
.then(returnedMuseum => {
        console.log(returnedMuseum)
    })
console.log(newMuseum)
    this.clearForm()
}

clearForm = () => {
    this.setState({name: '',description: '',city: '', coords: '', image: ''})
}

render() {
    return (
    <div className='museumForm'>
        this form makes a new museum<br/>
        <form onSubmit={this.handleOnSubmit}>
            <label>
                Name:
                <input type='text'
                       name='name'
                       value={this.state.name}
                       onChange={this.handleChange}
                       />
            </label><br/>
            <label>
                description:
                <input type='text'
                       name='description'
                       value={this.state.description}
                       onChange={this.handleChange}
                       />
            </label><br/>
            <label>
                City:
                <input type='text'
                       name='city'
                       value={this.state.city}
                       onChange={this.handleChange}
                       />
            </label><br/>
            <label>
                Co-ordinates:
                <input type='text'
                       name='coords'
                       value={this.state.coords}
                       onChange={this.handleChange}
                       />
            </label><br/>
            <label>
                Image Link:
                <input type='text'
                       name='image'
                       value={this.state.image}
                       onChange={this.handleChange}
                       />
            </label><br/>
            <input type='submit' />
        </form>
    </div>
    )
    }
}

export default MakeMuseum