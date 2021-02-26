import { useContext } from 'react';
import { ServiceContext } from "../context/Service";

const Alert = () => {
   const alertContext_ = useContext(ServiceContext);
   return (
      alertContext_.alert !== null && (
         <div className={`alert alert-${alertContext_.alert.type}`}>
            <i className="fas fa-info-circle"></i>
            { alertContext_.alert.msg }
         </div>
      )
   )
}
export default Alert;