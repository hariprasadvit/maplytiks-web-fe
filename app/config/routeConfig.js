// import Homepage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LiveGraphs from 'components/LiveGraphs';

// import { mdiArrowDownThick } from '@mdi/js';
import {
  HomePage,
  Brief,
  Submitted,
  Analytics,
  Project,
  Scope,
  Deliverables,
  AuthorizedSignatory,
  SignInPage,
  Client,
  Drafts,
  Overview,
  Projects,
  ContactUs,
  About,
  Profile,
  Glossary,
  TermsOfUse,
  Privacy,
} from '../ui-container';
import HomeExpand from '../ui-container/HomeExpand/index';
import SocialPage from '../ui-container/SocialPage/index';
import NewAnalytics from '../ui-container/NewAnalytics/index';
import Playground from '../components/Playground';
export const uiRouteConfig = [
  {
    path: '/land',
    // auth: true,
    exact: true,
    component: HomePage,
  },
  {
    path: '/homeExpand',
    // auth: true,
    exact: true,
    component: HomeExpand,
  },
  {
    path: '/newanalytics',
    // auth: true,
    exact: true,
    component: NewAnalytics,
  },
  {
    path: '/social',
    // auth: true,
    exact: true,
    component: SocialPage,
  },
  {
    path: '/projects',
    // auth: true,
    exact: true,
    component: Projects,
  },
  {
    path: '/briefing',
    // auth: true,
    exact: true,
    component: Brief,
  },
  {
    path: '/submitted',
    // auth: true,
    exact: true,
    component: Submitted,
  },
  {
    path: '/analytics',
    // auth: true,
    exact: true,
    component: Analytics,
  },
  {
    path: '/Project',
    // auth: true,
    exact: true,
    component: Project,
  },
  {
    path: '/Scope',
    // auth: true,
    exact: true,
    component: Scope,
  },
  {
    path: '/AuthorizedSignatory',
    // auth: true,
    exact: true,
    component: AuthorizedSignatory,
  },
  {
    path: '/SignInPage',
    // auth: true,
    exact: true,
    component: SignInPage,
  },
  {
    path: '/deliverables',
    // auth: true,
    exact: true,
    component: Deliverables,
  },
  {
    path: '/Client',
    component: Client,
  },

  {
    path: '/Drafts',
    component: Drafts,
  },

  {
    path: '/overview',
    // auth: true,
    exact: true,
    component: Overview,
  },
  {
    path: '/contactUs',
    // auth: true,
    exact: true,
    component: ContactUs,
  },
  {
    path: '/live',
    // auth: true,
    exact: true,
    component: LiveGraphs,
  },
  {
    path: '/about',
    // auth: true,
    exact: true,
    component: About,
  },
  {
    path: '/profilePage',
    // auth: true,
    exact: true,
    component: Profile,
  },
  {
    path: '/glossary',
    // auth: true,
    exact: true,
    component: Glossary,
  },

  {
    path: '/terms',
    // auth: true,
    exact: true,
    component: TermsOfUse,
  },

  {
    path: '/privacy',
    // auth: true,
    exact: true,
    component: Privacy,
  },

  {
    path: '/test-ground',
    // auth: true,
    exact: true,
    component: Playground,
  },

  {
    path: '*',
    // auth: true,
    exact: true,
    component: NotFoundPage,
  },
];
