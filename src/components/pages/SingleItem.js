import { Fragment, useEffect,useContext } from 'react'
import { Link } from 'react-router-dom';
import Spinner from './../layout/Spinner';
import { ServiceContext } from "../context/Service";
import MovieTime from "./MovieTime";

const SingleItem = ({match}) => {
   const cardContext_ = useContext(ServiceContext);
   const {loading, getAllMovies, cinema_ } = cardContext_;
   
   useEffect(() => {
      if(!cinema_) getAllMovies();
   }, []);



   if(!cinema_ ||  loading) return <Spinner />
   const movie_ = cinema_[match.params.code];
   return (
      <Fragment>
         <Link to='/' className='btn btn-light'>
            Back To Search
         </Link>

         <div className='card grid-2'>
            <div className='all-center'>
               <img src={movie_.Img_1s} className='round-img' alt='' style= {{ width: '150px' }} />
               <h1>{movie_.FilmTitle}</h1>
            </div>
            <div>
               {movie_.Synopsis !=='' && (
                  <Fragment>
                     <h3>Synopsis</h3>
                     <p>{movie_.Synopsis }</p>
                  </Fragment>
               )}
               {movie_.Youtube !=='None' && (<a href={movie_.Youtube} className='btn btn-dark my-1'>
                  Visit youtube for thriller
               </a>)}

               <ul>
                  <li><strong>Certificate:</strong> {movie_.Certificate}</li>
                  <li><strong>Coming Soon:</strong> {movie_.ComingSoon}</li>
                  <li><strong>Duration: </strong>{movie_.RunningTime}mins</li>
                  <li><strong>Genre: </strong>{movie_.Genre}</li>
               </ul>
               
            </div>
         </div>
         <MovieTime performance={movie_.Performance} />
      </Fragment>
      

   )
}


export default SingleItem;