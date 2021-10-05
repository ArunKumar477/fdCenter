import React, {Component} from 'react'
import 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputRadio,
  CLabel,
  CTextarea,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Common from "../../helper/Common.js"

class AddHoliday extends Component{
  constructor(props) {
      super(props);
      this.state = {
        name:'',
        doj:'',
      }
  }
setAddUser = (e) => {
  this.setState({
    [e.target.name]:e.target.value,
  });
}
addHoliday = () => {
  var { name,doj } = this.state;
  if(name === ""){
    toast.warn("Please enter Your Employee Name" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  if(doj === ""){
    toast.warn("please Select Joining Date" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }

  let subURl = "requests.php?type=addHoliday";
      var postJson = {
            name:name,
              doj:doj,
          }
      axios({
        method: 'POST',
        url: Common.baseURl+subURl,
        mode: 'no-cors',
        headers: {'Content-Type':'application/json'},
        data: postJson
      }).then(function (response) {
        console.log(JSON.stringify(response))
          if (response.data.response_code === 200) {
            toast.success("Data Saved!", {
              autoClose: 3000,
              hideProgressBar: true,
            });
            return true;
          } else {
            toast.error("Failed !" , {
              autoClose: 3000,
              hideProgressBar: true,
            });
          }
      });
  }
  render () {
  return (
    <>
    <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add User's
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">

              {/*<CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Test</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="test" name="test"  placeholder="Test" />
                </CCol>
              </CFormGroup>*/}

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Holiday Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="name" name="name" onChange={this.setAddUser} value = {this.state.name} placeholder="Holiday Name" />
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Date Of Holiday</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="date" id="doj" name="doj" onChange={this.setAddUser} value = {this.state.doj} placeholder="date" />
                </CCol>
              </CFormGroup>
              
              
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="sm" color="primary"  onClick = { () => this.addHoliday() }><CIcon name="cil-scrubber" /> Submit</CButton>
              &nbsp;&nbsp;
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
            <ToastContainer />
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
}
export default AddHoliday 
