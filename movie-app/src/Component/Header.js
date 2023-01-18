import react from "react";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";


let API_key = "&api_key=eb41f1ece3c61935c54dcbcd6f2793d4";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;


let arr=["popular","Theaters","kids","Drama","Comedies"];
const Header = () => {
    const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const[search,setSearch]=useState();

  useEffect(() => {
    fetch(url_set).then(res => res.json()).then(data => {
      setData(data.results)
    }, [url_set]);
  })
    const getData=(movieType)=>{
        if(movieType=="popular")
        {
            url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Theaters")
        {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
        }
        if(movieType=="kids")
        {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
        }
        if(movieType=="Drama")
        {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
        }
        if(movieType=="Comedies")
        {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
        }
        setUrl(url);

    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url=base_url+"search/movie?api_key=eb41f1ece3c61935c54dcbcd6f2793d4&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }
    return (
        
        <div className="bg-light-orange">
            <div className="container header">
                
                <nav>
                    <ul>
                        {
                            arr.map((value)=>{
                                return(
                                    <li><a href="#" name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>

                                )
                            })
                            
                        }
                        
                    </ul>
                </nav>
                <form>
                    <div className="searchBtn">
                        <input type="text" placeholder="Enter Movie Name" className="placeHolder" onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeypress={searchMovie}></input>
                        <div><i className="fa-light fa-magnifying-glass"></i></div>
                    </div>
                </form>
            </div>
            <div className="container movies-container">

      {
        (movieData.length == 0) ? <p className="notFound">Not found</p> : movieData.map((res, pos) => {
          return (
            <MovieCard info={res} key={pos} />
          )
        })
      }



    </div>

        </div>
    )

    

}

export default Header;
