/* eslint-disable */
import axios from 'axios';

function withdraw(withdrawData){
  const url = 'http://christmas-q25.site/api/members/withdraw';
  return axios.patch(url, withdrawData);
}

export { withdraw };