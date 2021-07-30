import { useEffect } from "react"
import { Alert } from "react-bootstrap"


const Notification = ({notification, setNotification}) => {

    useEffect(() => {
      if (notification) {
        const timer = setTimeout(() => {
          setNotification(null)
        }, 5000)
        return () => clearTimeout(timer)
      }
    }, [notification, setNotification])
    
    return (
  <div className="container">
    {(notification &&
      <Alert variant="success">
        {notification}
      </Alert>
    )}
  </div>
    )
  }

  export default Notification