import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Itemcard = ({movie_: {Img_1s, FilmTitle,Code}}) => {


    return (
        <div className='card text-center'>
            <img
                src={Img_1s}
                alt=''
                className='round-img'
                style={{ width: '60px' }}
            />
            <h3>{FilmTitle}</h3>

            <div>
                <Link to={`/film/${Code}`} className='btn btn-dark btn-sm my-1'>
                More
                </Link>
            </div>
        </div>
    )
}

Itemcard.propTypes = { movie_: PropTypes.object.isRequired };
  
export default Itemcard;