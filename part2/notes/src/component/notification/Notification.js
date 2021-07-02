import { useEffect } from "react";

const Notification = ({message, setMessage,info, setInfo}) => {
    
    useEffect(() => {
        if (message || info) {
            const timer = setTimeout(() => {
                setMessage(null);
                setInfo(null)
            }, 5000);
            return () => clearTimeout(timer)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message, info]);

    return ( 
        message ?
        <div className="error">{message} </div>
    : info ?
    <div className="error">{message} </div>
        :
        null
     );
}
 
export default Notification;