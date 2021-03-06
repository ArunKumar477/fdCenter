import React, {Component,useState} from 'react'
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



const Addnotes = ()=> {
  const history = useHistory();

  const [folder,setFolder] = useState('');  
  const [weeks,setWeeks] = useState('');  

  const addImage = async () =>{

  let subURl = "requests.php?type=addFile";
  var postJson = {
        folder:folder,
        weeks:weeks
      }
      // alert(JSON.stringify(postJson))
      // return false;
  axios({
    method: 'POST',
    url: Common.baseURl+subURl,
    mode: 'no-cors',
    headers: {'Content-Type':'application/json'},
    data: postJson
  }).then(function (response) {
      if (response.data.response_code === 200){
        setFolder('');
        setWeeks('');
        history.push("/viewnotes");
      }else if(response.data.response_code === 409) {
        setFolder('');
        alert(JSON.stringify(response.data.response_message))
      }else{
        alert(JSON.stringify(response.data.response_message))
      }
  });
}

  return (
    <>
    <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add Notes
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Folder Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                  id="folder"
                  name="folder"
                  onChange={e => setFolder(e.target.value)} 
                  value = {folder} placeholder="Title Name" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Number Of Weeks</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                  id="weeks" 
                  name="weeks" 
                  onChange={e => setWeeks(e.target.value)} 
                  value = {weeks} placeholder="Number Of Weeks" />
                </CCol>
              </CFormGroup>
             
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="sm" color="primary"
                onClick = {()=> addImage()}
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
export default Addnotes
