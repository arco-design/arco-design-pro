export default () => {
  return localStorage.getItem('userStatus') === 'login';
};
