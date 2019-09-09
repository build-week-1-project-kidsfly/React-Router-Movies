import React, { useState } from 'react';
import Axios from 'axios';
import '../index.css'

let someThing = {id: 6, title: '', director: '', metascore: '', stars: []};
const AddMovie = (props) => {
    const [movie, setMovie] = useState(someThing)

    const handleChange = (e) => {
        const { name, value } = e.target
        setMovie({...movie, [name]: value})
    };

    const handleArray = (e) => {
        const { name, value } = e.target
    }

    const handleSubmit = e => {
        e.preventDefault()
        Axios.post('http://localhost:5000/api/movies', movie)
            .then(res => {
                console.log(res);
                setMovie({id: movie.id + 1, title: '', director: '', metascore: '', stars: []})})
            .catch(err => console.log(err))
    };
    return (
        <div className="form-cont">
            <h2 className="form-header">Add a movie</h2>
            <form className="form" onSubmit={e=>handleSubmit(e)}>
                <input className='form-input' type='text' value={movie.title} name='title' placeholder='Title' onChange={e => handleChange(e)}  />
                <input className='form-input' type='text' value={movie.director} name='director' placeholder='Director' onChange={e => handleChange(e)}  />
                <input className='form-input' type='text' value={movie.metascore} name='metascore' placeholder='Metascore' onChange={e => handleChange(e)}  />
                <textarea className='form-input' type='text' value={movie.stars} name='stars' placeholder='Stars'  />
                <button className='form-submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddMovie;