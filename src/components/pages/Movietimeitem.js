import PropTypes  from "prop-types";

const Movietimeitem = ({ item }) => {
   // console.log(item);
   return (
      <div className="card">
         <ul>
            <li><strong>Cast:</strong> {item.PerfCat}</li>
            <li><strong>Screen</strong> {item.Screen}</li>
            <li><strong>Date: </strong>{item.PerformDate}</li>
            <li><strong>Time: </strong>{item.StartTime}</li>
         </ul>
         <a href={item.InternalBookingURLDesktop} className='btn btn-dark my-1'>Booking</a>
      

      </div>
   )
}

Movietimeitem.propTypes ={
   item: PropTypes.object.isRequired
}

export default Movietimeitem;