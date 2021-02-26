import Movietimeitem from './Movietimeitem';
import PropTypes from 'prop-types';

const MovieTime = ({ performance }) => {
   return performance.map((record,id) => 
      <Movietimeitem item={record} key={id}/>
   );
}

MovieTime.propTypes = { 
   performance: PropTypes.array.isRequired,
}
export default MovieTime;