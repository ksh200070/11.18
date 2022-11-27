import axios from 'axios';

function pwsend(emaildata){
    const url = 'http://christmas-q25.site/api/members/pw';
    return axios.post(url, emaildata); 
  }
  
  export { pwsend };