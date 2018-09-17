import {combineReducers} from 'redux';
import containers from './postcontainers';
const Allpis = combineReducers({
    containers: containers,
  
});

export default Allpis 