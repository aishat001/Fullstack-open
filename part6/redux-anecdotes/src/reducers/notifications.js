
const notification = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.payload.message;
        case 'REMOVE_NOTIFICATION':
            return null;    
        default:
            return state;
    }
}
 
export const setNotification = message => (
    {
        type: 'SET_NOTIFICATION',
        payload: {
            message
        }
    }
)
export const removeNotification = () => (
    {
        type: 'REMOVE_NOTIFICATION'
    }
)

export default notification;