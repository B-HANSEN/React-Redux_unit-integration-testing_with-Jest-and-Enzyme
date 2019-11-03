import { types } from '../../actions/types';
import postsReducer from './reducer';


// first stage according to TDD approach, write test that fail (before specifying reducer, set up a barebone function that returns null)
// two scenarios to test a reducer:
// (1) test if reducer returns a default state 
// (2) test if reducer returns a correct piece of state, if it receives the correct type


describe('Posts Reducer', () => {
    it('should return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    // match the type received from types object types.GET_POSTS
    it('should return new state if receiving type', () => {
        const posts = [
            { title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }
        ];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });

});