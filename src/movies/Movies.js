import React, { useState, useEffect } from 'react';
import Stringify from "../Stringify";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [input, setInput]= useState('')
    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=spider&apikey=4a3b711b').then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search]);
                setIsLoaded(true);
            }, 2000)
        })
    }, []);
    const inputHandler= (e) =>{
        const {value} = e.target;
        setInput(value);
    }
    const search = () =>{
        fetch(`https://www.omdbapi.com/?s=${input}}&apikey=4a3b711b`).then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search]);
                setIsLoaded(true);
            }, 2000)
        })
    }

    return (
        <div>
            <div class="input-group mb-3">
  <input type="text" onChange={inputHandler}class="form-control" placeholder="Type to search..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <button onClick={search}class="btn btn-outline-secondary" type="button">Search</button>
  </div>
</div>
            {!isLoaded && (<img src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp" />)}
            <div class="row">
                {movies.map(({Poster, Title, Year, Type}) => (
                    <div class="col-4">
                        <div class="card" style={{ width: '18rem' }}>
                            <img src={Poster} width="150" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{Title}</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Year : {Year}</li>
                                <li class="list-group-item">Type : {Type}</li>
                            </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies
