import React, {  useContext,useEffect } from 'react';
import Itemcard from './Itemcard';
import Spinner from '../../layout/Spinner';
import { ServiceContext } from "../../context/Service";

const Card = () => {
   const cardContext_ = useContext(ServiceContext);
   const {loading, getAllMovies, cinema_ } = cardContext_;

   useEffect(() => {
      if(!cinema_)getAllMovies();
   }, []);
   const userStyle = {
      display:'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap:'1rem'
   }
   if(!cinema_ ||  loading) return <Spinner />
   
   

   return (
      <div style={userStyle}>
{    
         Object.entries(cinema_).map((movies, i ) => 
         // {console.log(movies,i);}
               <Itemcard key={movies[0]} movie_={movies[1]} />
               )

         } 
         
      </div>
   );
}

export default Card;