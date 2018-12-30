const INITIAL_STATE = {
    authenticated: false
}

const authentication = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.payload;
        default:
            return state;
    }
};

export default authentication;