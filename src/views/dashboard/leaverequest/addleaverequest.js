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


const AddStudent = ()=> {

  const [leavetype,setLeavetype] = useState('');  
  const [description,setDescription] = useState('');  
  const [from,setFrom] = useState('');  
  const [to,setTo] = useState('');  


const addStudentfApi = async () =>{

  if(description === ""){
    toast.warn("Please Enter Your Description" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }  
  if(from === ""){
    toast.warn("Please  Enter Your From date" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }  
  if(to === ""){
    toast.warn("Please  Enter Your To date" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  let subURl = "requests.php?type=staffLeaveRequest";
  var postJson = {
        user_id:1,
        leave_type:leavetype,
        reason : description,
        start_date:from,
        end_date: to
      }
      //alert(JSON.stringify(response.data.response_code))
   await axios({
    method: 'POST',
    url: Common.baseURl+subURl,
    mode: 'no-cors',
    headers: {'Content-Type':'application/json'},
    data: postJson
  }).then(function (response) {
      if (response.data.response_code === "200"){
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


  return (
    <>
    <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Add Student's
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">leave type</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom d="leavetype" name="leavetype" value = {leavetype} onChange={e => setLeavetype(e.target.value)}  >
                    <option value="0">Please select</option>
                    <option value="Parental Leave">Parental Leave</option>
                    <option value="Sick Day">Sick Day</option>
                    <option value="Unpaid">Unpaid</option>
                    <option value="Vacation">Vacation</option>
                    <option value="Off">Off</option>
                  </CSelect>
                </CCol>
              </CFormGroup>
            
         
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Description</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                      name="description"
                      id="description"
                      rows="9"
                      placeholder="Description..."
                      onChange={e => setDescription(e.target.value)} 
                      value = {description}
                    />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">From / To Date</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                    type="date" 
                    id="from" name="from"
                     onChange={e => setFrom(e.target.value)} 
                     value = {from} placeholder="date" />
                </CCol>
              </CFormGroup>
             
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">To Date</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                    type="date" 
                    id="to" name="to"
                     onChange={e => setTo(e.target.value)} 
                     value = {to} placeholder="date" />
                </CCol>
              </CFormGroup>

             
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="sm" color="primary"
                onClick = {()=> addStudentfApi()}
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
export default AddStudent
