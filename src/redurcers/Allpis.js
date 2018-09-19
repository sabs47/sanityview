import {combineReducers} from 'redux';
import posts from './postcontainers';
const Allpis = combineReducers({
    posts: posts,
  
});

export default Allpis 