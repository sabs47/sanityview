import {FETCH_POST} from '../Component/actions/types';

export default function postcotainers(state = [], action) {
  switch (action.type) {
     case FETCH_POST:
      return action.posts;
    default:
      return state;
  }
}