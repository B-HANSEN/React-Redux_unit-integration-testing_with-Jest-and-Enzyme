import { types } from './../../actions/types';


// first barebone function setup to let initial tests fail, both cases it expects [] but it returns null
// export default (state=[], action => {
//     return null;
// })

// TDD: after both failed test, revise the reducer to let the tests pass


export default (state=[], action) => {
    switch(action.type) {
        case types.GET_POSTS:
            return action.payload;
            default:
                return state;
    }
}