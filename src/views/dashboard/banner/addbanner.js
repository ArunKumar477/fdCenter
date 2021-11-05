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
  CLabel,
  CRow,
  CInputFile,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Common from "../../helper/Common.js";
//import FileBase64 from './react-file-base64.js';



const Addstaff = ()=> {

  const [topic,settopic] = useState('');  
  const [baseImage, setBaseImage] = useState('');
  
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    //console.log(base64)
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      }
    });
  };


  const addImage = async () =>{
  /*if(name === ""){
    toast.warn("Please enter Your Meeting Title" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }*/
  let subURl = "requests.php?type=addBannerImg";
  var postJson = {
        topic:topic,
        image:baseImage
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

        //window.location.reload();
      }else {

      }
  });
  
}


  return (
    <>
    <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Create Meeting
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Title Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                  id="topic" 
                  name="topic" 
                  onChange={e => settopic(e.target.value)} 
                  value = {topic} placeholder="Title Name" />
                </CCol>
              </CFormGroup>
            
              
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Image</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInputFile
                   type="file"
                   onChange={(e) => {
                     uploadImage(e);
                   }}
                  />
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
export default Addstaff
