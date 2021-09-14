import Dashboard from'./views/dashboard/Dashboard';
// import Users from'./views/users/Users';
// import User from'./views/users/User';
import './scss/style.scss';

const routes = [
  { path: './admin', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/admin/users', exact: true,  name: 'Users', component: Users },
  // { path: '/admin/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
