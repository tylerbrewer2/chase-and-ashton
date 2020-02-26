import Home from './containers/Home';
import RSVP from './containers/RSVP';
import Details from './containers/Details';
import Registry from './containers/Registry'
import Splash from './components/Splash'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/splash',
    component: Splash,
  },
  {
    path: '/rsvp',
    component: RSVP,
  },
  {
    path: '/details',
    component: Details,
  },
  {
    path: '/registry',
    component: Registry,
  },
];

export default routes;
