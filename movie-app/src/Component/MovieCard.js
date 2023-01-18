import react from "react";
import Movie from "./Movie";
import "./Movie.css"
const MovieCard=(MovieCard)=> {
    console.log(MovieCard.info);
    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
           <div className="Movie" style={{backgroundColour:'chocolate'}}>
            <img src=
            {img_path+MovieCard.info.poster_path}className="sunset" style={{height: '350px'}}></img> 
                <div className="movie-details">
                    <div className="box">
                    </div>
                    <div className="Overview">
                    <h4 className="title" >{MovieCard.info.title}</h4>
                        <p className="rating">{MovieCard.info.vote_average}</p>


                        <h1>overview </h1>
                        {MovieCard.info.overview}
                    </div>
                </div> 
           </div>
        </>
    )

}

export default MovieCard;