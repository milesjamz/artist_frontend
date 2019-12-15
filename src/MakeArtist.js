import React from 'react';

class MakeArtist extends React.Component {

state = {
    name: '',
    bio: '',
    location: '',
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
    console.log('yeahhhh')
    const newArtist = {
        based_in: this.state.location,
        name: this.state.name,
        image:this.state.image,
        bio: this.state.bio
    }
    fetch('http://localhost:3000/api/v1/artists', {
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({artist: newArtist})
    }).then(res => res.json())
.then(returnedArtist => {
        console.log(returnedArtist)
    })
console.log(newArtist)
    this.clearForm()
}

clearForm = () => {
    this.setState({name: '',bio: '',location: '', image: ''})
}

render() {
    return (
    <div className='artistForm'>
        hello dere<br/>
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
                Biography:
                <input type='text'
                       name='bio'
                       value={this.state.bio}
                       onChange={this.handleChange}
                       />
            </label><br/>
            <label>
                Based In:
                <input type='text'
                       name='location'
                       value={this.state.location}
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

export default MakeArtist