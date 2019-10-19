import { combineReducers } from 'redux';

import movies from './movies';
import newMovie from './actions/newMovie';

export default combineReducers({
    movies,
    newMovie
})