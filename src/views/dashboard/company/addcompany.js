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
  CLabel,
  CTextarea,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Common from "../../helper/Common.js"


class addCompany extends Component{
  constructor(props) {
      super(props);
      this.state = {
        name:'',
        address:'',
        lat:'',
        long:'',
        postalcode:'',
      }
  }
setaddCompany = (e) => {
  this.setState({
    [e.target.name]:e.target.value,
  });
}

addCompany = () => {
  var { name,address,lat,long,postalcode } = this.state;
  if(name === ""){
    toast.warn("Please enter Your Company Name" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  if(lat === ""){
    toast.warn("Please enter Your latitude" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  if(long === ""){
    toast.warn("Please enter Your longitude " , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  if(postalcode === ""){
    toast.warn("Please enter Your Postalcode" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }

  if(address === ""){
    toast.warn("Please enter Your Address" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }

  let subURl = "requests.php?type=addCompany1";

      var postJson = {
            name:name,
            address:address,
            lat:lat,
            long:long,
            postalcode:postalcode
          }
      axios({
        method: 'POST',
        url: Common.baseURl+subURl,
        mode: 'no-cors',
        headers: {'Content-Type':'application/json'},
        data: postJson
      }).then(function (response) {
        console.log(JSON.stringify(response))
          if (response.data.response_code == 200){
            toast.success("Data Saved!", {
              autoClose: 3000,
              hideProgressBar: true,
            });
            return false;
          }else {
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

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Company Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="name" name="name" onChange={this.setaddCompany} value = {this.state.name} placeholder="Company Name" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Lat / Long</CLabel>
                </CCol>
                <CCol xs="12" md="4">
                  <CInput id="lat" name="lat" onChange={this.setaddCompany} value = {this.state.lat} placeholder="Eg: 89.123466458" />
                </CCol>
                <CCol md="1">/</CCol>
                <CCol xs="12" md="4">
                  <CInput id="long" name="long" onChange={this.setaddCompany} value = {this.state.long} placeholder="Eg12.12354687" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Postal Code</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="postalcode" name="postalcode" onChange={this.setaddCompany} value = {this.state.postalcode} placeholder="Postal Code" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Address</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea name="address" id="address"
                      rows="9"
                      placeholder="Address..."
                      onChange={this.setaddCompany} value = {this.state.address}
                    />
                </CCol>
              </CFormGroup>

              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="sm" color="primary"  onClick = { () => this.addCompany() }><CIcon name="cil-scrubber" /> Submit</CButton>
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
export default addCompany
