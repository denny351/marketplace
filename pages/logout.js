import Router from 'next/router';
import axios from 'axios';


const Logout = props => {
  axios.get('/api/logout').then(request => {
    setTimeout(() => {
      Router.push('/');
    }, 2000);
  });

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Sorry to see you go!</h1>
    </div>
  );
};
export default Logout;
