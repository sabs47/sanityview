import {FETCH_POST,FETCH_PAUSE} from '../Component/actions/types';

export default function postcotainers(state = [], action) {
  switch (action.type) {
     case FETCH_POST:
      return action.posts;
         case FETCH_PAUSE:
         return [...state, action.payload];
      default:
      return state;
  }
}