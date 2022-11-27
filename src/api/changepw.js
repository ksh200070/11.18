/* eslint-disable */
import axios from 'axios';

function changePw(pwData){
  const url = 'http://christmas-q25.site/api/members/newpw';
  return axios.patch(url, pwData);
}

export { changePw };