import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
} from '@coreui/react'
import { useHistory } from "react-router-dom";

const WidgetsDropdown = () => {
  const history = useHistory();

  function viewEmployee() {
    history.push("/viewuser");
  }
  function viewLastChickIn(){
    
  }

  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="primary"
          header="8"
          text="Employees"
          onClick={viewEmployee}
          footerSlot={
            <br/>
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header="6"
          text="Last Check-in"
          onClick={viewLastChickIn}
          footerSlot={
            <br/>
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="2"
          text="Defaulters"
          footerSlot={
            <br/>
          }
        >
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="1"
          text="Holidays"
          footerSlot={
            <br/>
          }
        >
        </CWidgetDropdown>
      </CCol>


    </CRow>
  )
}

export default WidgetsDropdown
