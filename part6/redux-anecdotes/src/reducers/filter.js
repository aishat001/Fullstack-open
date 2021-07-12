const filter = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload.text;
        default:
            return state;
    }
};

export const setFilter = text => (
    {
        type: 'SET_FILTER',
        payload: {
            text
        }
    }
);

export default filter; 