    import { 
        FETCH_MOVIES_PENDING,
        FETCH_MOVIES_FULLFILLED,
        FETCH_MOVIES_REJECTED,
        
        
        DELETE_MOVIES_PENDING,
        DELETE_MOVIES_FULLFILLED,
        DELETE_MOVIES_REJECTED 
    } from '../actions/movies';
    
    const initialState = {
        fetching: false,
        moviesList: [],
        error: {}
    };
    
    export default (state = initialState, action) => {
        switch (action.type){
            case FETCH_MOVIES_PENDING:
                return {
                    ...state,
                    fetching:true
                }
            case FETCH_MOVIES_FULLFILLED:
                return {
                    ...state,
                    moviesList: action.payload,
                    fetching:false
                };
            case FETCH_MOVIES_REJECTED:
                return {
                    ...state,
                    error: action.payload,
                    fetching:false
                };
            
            
                case DELETE_MOVIE_PENDING:
                return {
                    ...state,
                    
                }
                case DELETE_MOVIS_FULLFILLED:
                return {
                    ...state,
                    moviesList: state.moviesList.filter(item =>item._id !==action.payload.id),
                    
                };
                case DELETE_MOVIE_REJECTED:
                return {
                    ...state,
                    error: action.payload,
                    
                };
            default:
                return state;
            }
        }
    
