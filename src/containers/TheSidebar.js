import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'


import CIcon from '@coreui/icons-react'

// sidebar nav config
//import navigation from './_nav'


const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  const [navigation, setNavigation] = useState([]);

  const roleIdRdx = useSelector((state) => state.loginpageReducer.role_id);
  console.log("nave bar ==>", roleIdRdx)


  useEffect(() => {

    if (roleIdRdx == 1) {

      setNavigation([

        {
          _tag: 'CSidebarNavItem',
          name: 'Dashboard',
          to: '/dashboard',
          icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
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
          ]


        },
      ])
    } else {

      /*staff view */

      setNavigation([

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

      ])

    }
  }, [])

  // console.log(JSON.stringify(navigation));

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
