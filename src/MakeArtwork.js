import React from 'react';

class MakeArtwork extends React.Component {

state = {
    name: '',
    description: '',
    material: '',
    date: '',
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
    const newArtwork = {
        coords: this.state.coords,
        name: this.state.name,
        image:this.state.image,
        description: this.state.description,
        city: this.state.city
    }
    fetch('http://localhost:3000/api/v1/artworks', {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({artwork: newArtwork, artist_id:1, museum_id: 1})
    }).then(res => res.json())
.then(returnedArtwork => {
        console.log(returnedArtwork)
    })
console.log(newArtwork)
    this.clearForm()
}

clearForm = () => {
    this.setState({name: '',description: '',city: '', coords: '', image: ''})
}

render() {
    return (
    <div className='artworkForm'>
        this form makes a new artwork<br/>
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
                Material:
                <input type='text'
                       name='material'
                       value={this.state.material}
                       onChange={this.handleChange}
                       />
            </label><br/>
            <label>
                Date:
                <input type='text'
                       name='date'
                       value={this.state.date}
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

export default MakeArtwork