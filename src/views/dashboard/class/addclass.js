import React, {useState} from 'react'
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
  CRow,
  CInputFile,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Common from "../../helper/Common.js";
//import FileBase64 from './react-file-base64.js';
import { useHistory } from "react-router";



const Addclass = ()=> {
  const history = useHistory();

  const [className,setClassName] = useState('');  
  const [role,setRole] = useState('');  

  const AddclassFun = async () =>{

  let subURl = "requests.php?type=addClass";
  const staffId = 2;
  var postJson = {
        className:className,
        role:role,
        staffId:staffId
      }
      // alert(JSON.stringify(postJson))
      // return false;
      if (className != "" ) {
        axios({
          method: 'POST', 
          url: Common.baseURl+subURl,
          mode: 'no-cors',
          headers: {'Content-Type':'application/json'},
          data: postJson
        }).then(function (response) {
            if (response.data.response_code === 200){
              setClassName('');
              setRole('');
            }else{
              alert(JSON.stringify(response.data.response_message))
            }
        });
      } else {
        alert(0)
      }

}

  return (
    <>
    <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add Class
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Class Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                  id="className"
                  name="className"
                  onChange={e => setClassName(e.target.value)} 
                  value = {className} placeholder="Class Name" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Role</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                <CSelect custom name="role" id="role" onChange={e => setRole(e.target.value)}  value = {role} >
                  <option value="0">Please select</option>
                  <option value="3" selected >Kids</option>
                  <option value="4">Teen</option>
                  <option value="5">Adults</option>
                </CSelect>
                </CCol>
              </CFormGroup>


              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="sm" color="primary"
                onClick = {()=> AddclassFun()}
              ><CIcon name="cil-scrubber"  /> Submit</CButton>
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
export default Addclass
