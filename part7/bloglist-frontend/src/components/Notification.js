/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeNotification } from '../redux/actions/blogActions'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch(removeNotification())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notification, dispatch])

  return (
    <div>
      <div>
        {
          notification ?
            <div className="notification">
              {notification}
            </div>
            :
            null
        }

      </div>
    </div>
  )
}

export default Notification