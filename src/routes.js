import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Addstaff = React.lazy(() => import('./views/dashboard/users/addstaff'));
const Viewstaff = React.lazy(() => import('./views/dashboard/users/viewstaff'));

const Addmeeting = React.lazy(() => import('./views/dashboard/meeting/addmeeting'));
const Viewmeeting = React.lazy(() => import('./views/dashboard/meeting/viewmeeting'));

const Addstudent = React.lazy(() => import('./views/dashboard/student/addstudent'));
const Viewstudent = React.lazy(() => import('./views/dashboard/student/viewstudent'));

const Addnotes = React.lazy(() => import('./views/dashboard/notes/addnotes'));
const Viewnotes = React.lazy(() => import('./views/dashboard/notes/viewnotes'));

const Addclass = React.lazy(() => import('./views/dashboard/class/addclass'));
const Viewclass = React.lazy(() => import('./views/dashboard/class/viewclass'));

const Addleaverequest = React.lazy(() => import('./views/dashboard/leaverequest/addleaverequest'));
const Viewleaverequest = React.lazy(() => import('./views/dashboard/leaverequest/viewleaverequest'));


const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Charts = React.lazy(() => import('./views/charts/Charts'));

const Addbanner = React.lazy(() => import('./views/dashboard/banner/addbanner'));
const Viewbanner = React.lazy(() => import('./views/dashboard/banner/viewbanner'));

const Viewuserlog = React.lazy(() => import('./views/dashboard/users/viewuserlog'));
const Viewcompany = React.lazy(() => import('./views/dashboard/company/viewcompany'));
const Addcompany = React.lazy(() => import('./views/dashboard/company/addcompany'));

const Addholiday = React.lazy(() => import('./views/dashboard/holiday/addholiday'));
const Viewholiday = React.lazy(() => import('./views/dashboard/holiday/viewholiday'));

const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/addstaff', name: 'Adduser', component: Addstaff },
  { path: '/viewstaff', name: 'Viewuser', component: Viewstaff },

  { path: '/addmeeting', name: 'Addmeeting', component: Addmeeting },
  { path: '/viewmeeting', name: 'Viewmeeting', component: Viewmeeting },

  { path: '/addnotes', name: 'Addnotes', component: Addnotes },
  { path: '/viewnotes', name: 'Viewnotes', component: Viewnotes },

  { path: '/addclass', name: 'Addclass', component: Addclass },
  { path: '/viewclass', name: 'Viewclass', component: Viewclass }, 

  { path: '/addholiday', name: 'Addholiday', component: Addholiday },
  { path: '/viewholiday', name: 'Viewholiday', component: Viewholiday },
 
  { path: '/addstudent', name: 'Addstudent', component: Addstudent },
  { path: '/viewstudent', name: 'Viewstudent', component: Viewstudent },

  { path: '/addleaverequest', name: 'Addleaverequest', component: Addleaverequest },
  { path: '/viewleaverequest', name: 'Viewleaverequest', component: Viewleaverequest },

  { path: '/addbanner', name: 'Addbanner', component: Addbanner },
  { path: '/viewbanner', name: 'Viewbanner', component: Viewbanner },


  { path: '/addcompany', name: 'Addcompany', component: Addcompany },
  { path: '/viewcompany', name: 'Viewcompany', component: Viewcompany },
  { path: '/viewuserlog/:id?', name: 'viewuserlog', component: Viewuserlog },

  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
