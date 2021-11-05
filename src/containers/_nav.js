import React from 'react';
import CIcon from '@coreui/icons-react'
// import {configureStore} from '../redux/store'
import { SET_USER_ROLE } from "../redux/actionTypes";


export const set_user_role = (role_id) =>{
  alert(role_id)
    console.log('role_id- nav bar',role_id)
    return {
        type:SET_USER_ROLE,
        payload:role_id
    }
}

const _nav =  [
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Staff',
    route: '/base',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Staff',
        to: '/addstaff',
        icon: 'cil-pluse',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Staff List',
        to: '/viewstaff',
        icon: 'cil-pluse',
      },
    ],
  },


  {
    _tag: 'CSidebarNavDropdown',
    name: 'Student',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Student',
        to: '/addstudent',
        icon: 'cil-pluse',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Student List',
        to: '/viewstudent',
        icon: 'cil-pluse',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Class',
    route: '/base',
    icon: 'cil-pencil',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Class',
        to: '/addclass',
        icon: 'cil-pluse',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Class List',
        to: '/viewclass',
        icon: 'cil-pluse',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notes',
    route: '/base',
    icon: 'cil-drop',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Notes',
        to: '/addnotes',
        icon: 'cil-pluse',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Notes List',
        to: '/viewnotes',
        icon: 'cil-pluse',
      },
    ],
  },
  
  {
      _tag: 'CSidebarNavDropdown',
      name: 'Meeting',
      route: '/meeting',
      icon: 'cil-cursor',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Add Meeting',
          to: '/addmeeting',
          icon: 'cil-pluse',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Meeting List',
          to: '/viewmeeting',
          icon: 'cil-pluse',
        },
      ],
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Holidays',
      route: '/base',
      icon: 'cil-star',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Add Holiday',
          to: '/addholiday',
          icon: 'cil-pluse',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Holiday List',
          to: '/viewholiday',
          icon: 'cil-pluse',
        },
      ],
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Leave Request',
      route: '/base',
      icon: 'cil-calculator',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Add Request',
          to: '/addleaverequest',
          icon: 'cil-pluse',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'List Leave Request',
          to: '/viewleaverequest',
          icon: 'cil-pluse',
        },
      ],
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Banner Image',
      route: '/base',
      icon: 'cil-bell',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Add Banner',
          to: '/addbanner',
          icon: 'cil-pluse',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'List Banner List',
          to: '/viewbanner',
          icon: 'cil-pluse',
        },
      ],
    },
 
  ]

export default _nav 