import {FETCH_POST,FETCH_PAUSE } from './types'
import axios from 'axios';

const apiUrl = 'http://localhost:4243/containers/json';

const apiUrlforpause = 'http://localhost:4243/containers';

export const fetchPosts = (posts) => {
    return {
      type: FETCH_POST,
      posts
    }
  };
export const fetchAllPosts = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchPosts(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };}
    export const fetchpause = id =>{
      return{
        type:FETCH_PAUSE,
        payload: {
         id 
        }
      }}
      export const fetchpauses = id => {
    return( dispatch)=>{
      return axios.post(`${apiUrlforpause}/${id}/stop`)
   .then(response=>{
    dispatch(fetchpause(response.data))

    })
    .catch(error=>{
throw(error);

    })

  }}
  