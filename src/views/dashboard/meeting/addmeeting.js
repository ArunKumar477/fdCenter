
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



const Addstaff = ()=> {
  const history = useHistory();

  const [topic,settopic] = useState('');  
  const [dojdate,setDojDate] = useState('');  
  const [dojtime,setDojTime] = useState('');  
  //const [email,setEmail] = useState('');  
  const [password,setPassword] = useState('');  
  const [duration,setDuration] = useState('');
  const [class_id,setClass] = useState('');
const addMeetingApi = async () =>{
  if(topic === ""){
    toast.warn("Please enter Your Meeting Title" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  if(dojdate === ""){
    toast.warn("Please enter Your Meeting Date" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  
  if(dojtime === ""){
    toast.warn("Please enter Your Meeting Time" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  if(password === ""){
    toast.warn("Please enter Your Meeting Password" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  if(duration === ""){
    toast.warn("Please enter Your Meeting Duration" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  
let subURl = "create_meet.php";
const start_time = dojdate +" "+dojtime+":00";
  var postJson = {
        topic:topic,
        password:password,
        duration:duration,
        start_time:start_time,
        type:'2',
        class_id : class_id
      }
    axios({
    method: 'POST',
    url: Common.baseURl+subURl,
    mode: 'no-cors',
    headers: {'Content-Type':'application/json'},
    data: postJson
  }).then(function (response) {
    // alert(JSON.stringify(response))
      if (response.data.response_code === 200){
        toast.success("Data Saved!", {
          autoClose: 3000,
          hideProgressBar: true,
        });

        settopic('');
        setDojDate('');
        setDojTime('');
        setPassword('');
        setDuration('');
        setClass('');

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
                  value = {topic} placeholder="Meeting Title" />
                </CCol>
              </CFormGroup>
            
              
               {/* <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Company</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="companyId" id="companyId" onChange={this.setAddUser} value = {this.state.companyId} >
                    <option value="0">Please select</option>
                      {this.state.company.map(item => (
                        <option key={item.id} value={item.id}>
                          {item.Name}
                        </option>
                      ))}
                  </CSelect>
                </CCol>
              </CFormGroup> */}

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Class</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="class_id" id="class_id"  onChange={e => setClass(e.target.value)} value = {class_id} >
                    <option value="0">Please select</option>
                    <option value="1">English</option>
                    <option value="2">French</option>
                  </CSelect>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Date Of Joining</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                <CFormGroup row>
                  <CCol xs="6" md="6">
                    <CInput 
                      type="date" 
                      id="dojdate" name="dojdate"
                      onChange={e => setDojDate(e.target.value)} 
                      value = {dojdate} placeholder="date" />
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput 
                      type="time" 
                      id="dojtime" name="dojtime"
                      onChange={e => setDojTime(e.target.value)} 
                      value = {dojtime} placeholder="time" />
                  </CCol>
                </CFormGroup>            
                </CCol>

              </CFormGroup>            

              {/* <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Email</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                    id="email" 
                    name="email" 
                    onChange={e => setEmail(e.target.value)} 
                    value = {email} placeholder="Email" />
                </CCol>
              </CFormGroup> */}
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Password</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                    id="password" 
                    name="password" 
                    onChange={e => setPassword(e.target.value)} 
                    value = {password} 
                    placeholder="Password" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Duration</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                    id="duration" 
                    name="duration" 
                    onChange={e => setDuration(e.target.value)} 
                    value = {duration} 
                    placeholder="Duration" />
                </CCol>
              </CFormGroup>

             
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="sm" color="primary"
                onClick = {()=> addMeetingApi()}
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
