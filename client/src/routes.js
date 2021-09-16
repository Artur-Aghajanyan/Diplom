import Dashboard from'./views/dashboard/Dashboard';
import './scss/style.scss';

const routes = [
  { path: './admin', exact: true, name: 'Home' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
];

export default routes;
