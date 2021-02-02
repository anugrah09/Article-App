const initstate = {
    authError: null
}
const authreducer = (state = initstate, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            // console.log('LogIn Success');
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            // console.log('LogIn Error');
            return {
                ...state,
                authError: 'Login error'
            }
        case 'SIGNOUT_SUCCESS':
            // console.log('SIGNOUT_SUCCESS')
            return state;
        case 'SIGNUP_SUCCESS':
            // console.log('signup success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            // console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }

        default:
            return state;
    }
}

export default authreducer;