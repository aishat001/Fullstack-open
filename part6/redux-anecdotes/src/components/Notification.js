
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotification } from '../reducers/notifications'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(removeNotification());
      }, 5000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line
  }, [notification]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: '20px'
  }
  return (
    <div>
      <div style={style}>
        render Notification here...
      {notification}
      </div>
    </div>
  )
}

export default Notification