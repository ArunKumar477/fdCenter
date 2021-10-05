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

  const [gender,setGender] = useState('');  
  const [name,setName] = useState('');  
  const [empid,setEmpid] = useState('');  
  const [mobile,setMobile] = useState('');  
  const [doj,setDoj] = useState('');  
  const [postalcode,setPostalcode] = useState('');  
  const [address,setAddress] = useState('');  
  const [email,setEmail] = useState('');  
  const [ageGroup,setAgeGroup] = useState('');  
  const [bloodGorup,setBloodGorup] = useState('');  
  const [age,setAge] = useState('');  
  const [height,setHeight] = useState('');  
  const [weight,setWeight] = useState('');  


const addStudentfApi = async () =>{
  if(name === ""){
    toast.warn("Please enter Your Staff Name" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  if(empid === ""){
    toast.warn("Please enter Your Employee Code" , {
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
  if(email === ""){
      toast.warn("Please enter Your Email ID" , {
                    autoClose: 3000,
                    hideProgressBar: true,
                    });
        return false;
  }
/*  else if (email !== "") {
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_pattern.test(email))	{
            return false;
        }
        else{
        toast.warn("Please enter Your Valid email ID" , {
                      autoClose: 3000,
                      hideProgressBar: true,
                      });
          return false;
        }
  }*/

  if(mobile === ""){
    toast.warn("Please enter Your Mobile Number" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  } /*else if (mobile !== "") {
      var pattern = /^([0-9]{10,10})$/;
      if( pattern.test(mobile) ){
        return false;
      }else{
        toast.warn("Please enter Your Valid Mobile Number" , {
                      autoClose: 3000,
                      hideProgressBar: true,
                      });
        return false;
      }
  }*/


  if(postalcode === ""){
    toast.warn("Please enter Your Mobile Number" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  
  if(address === ""){
    toast.warn("Please enter Your Mobile Number" , {
                  autoClose: 3000,
                  hideProgressBar: true,
                  });
    return false;
  }
  let subURl = "requests.php?type=addUser";
  var postJson = {
        name:name,
        empid : empid,
        email:email,
        mobile: mobile,
        gender:gender,
        postalcode:postalcode,
        address:address,
        doj:doj,
        ageGroup:ageGroup,
        bloodGorup:bloodGorup,
        age:age,
        height:height,
        weight:weight
      }
      
  axios({
    method: 'POST',
    url: Common.baseURl+subURl,
    mode: 'no-cors',
    headers: {'Content-Type':'application/json'},
    data: postJson
  }).then(function (response) {
    //console.log(JSON.stringify(response))

      if (response.data.response_code === 200){
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
                  <CLabel htmlFor="text-input">Student Name</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                  id="name" 
                  name="name" 
                  onChange={e => setName(e.target.value)} 
                  value = {name} placeholder="Student Name" />
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
                  <CLabel htmlFor="text-input">Role ID</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                      id="empid" 
                      name="empid" 
                      onChange={e => setEmpid(e.target.value)} 
                      value = {empid} 
                      placeholder="Role ID" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Age Group</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="companyId" id="companyId"  onChange={e => setAgeGroup(e.target.value)} >
                    <option value="0">Please select</option>
                    <option value="3">Kids</option>
                    <option value="4">Teen</option>
                    <option value="5">Adults</option>
                  </CSelect>
                </CCol>
              </CFormGroup>


              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Date Of Joining</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                    type="date" 
                    id="doj" name="doj"
                     onChange={e => setDoj(e.target.value)} 
                     value = {doj} placeholder="date" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Age Group</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSelect custom name="bloodGorup" id="bloodGorup"  onChange={e => setBloodGorup(e.target.value)} >
                    <option value="0">Please select</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    <option value="O-">O-</option>
                  </CSelect>
                </CCol>
              </CFormGroup>

              
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Age</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="age" name="age" 
                   onChange={e => setAge(e.target.value)} 
                   value = {age} 
                   placeholder="Age" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Height</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="height" name="height" onChange={e => setHeight(e.target.value)} 
                   value = {height} placeholder="Height" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Weight</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="weight" name="weight" onChange={e => setWeight(e.target.value)} 
                   value = {weight} placeholder="Weight" />
                </CCol>
              </CFormGroup>


              {/*<CFormGroup row>
                <CCol md="3">

                  <CLabel htmlFor="text-input">Password</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="password" name="password" onChange={this.setAddUser} value = {this.state.password} placeholder="Password" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Email</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="email" name="email"  onChange={this.setAddUser} value = {this.state.email} placeholder="Email" />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Mobile#</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="mobile" name="mobile" onChange={this.setAddUser} value = {this.state.mobile} placeholder="Mobile" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Area</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="area" name="area" onChange={this.setAddUser} value = {this.state.area} placeholder="Area" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">City</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="city" name="city" onChange={this.setAddUser} value = {this.state.city} placeholder="City" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">State</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput id="st" name="st" onChange={this.setAddUser} value = {this.state.st} placeholder="State" />
                </CCol>
              </CFormGroup>*/}

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Gender</CLabel>
                </CCol>
                <CCol md="9">
                  <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio1" 
                      name="gender" 
                      value="male" 
                      onChange={e => setGender(e.target.value)} 
                      checked={gender === "male" ? true : false}
                    />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Male</CLabel>
                  </CFormGroup>
                  {/* <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio2"
                      name="gender" 
                      value="female" 
                      onChange={e => setgender(e.target.value)} 
                      checked={gender === "female" ? true : false}
                     />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Female</CLabel>
                  </CFormGroup> */}
                  </CCol>
                </CFormGroup>

              <CFormGroup row>
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
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Mobile</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                    id="mobile" 
                    name="mobile" 
                    onChange={e => setMobile(e.target.value)} 
                    value = {mobile} 
                    placeholder="Mobile" />
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Zip Code</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput 
                    id="postalcode" 
                    name="postalcode" 
                    onChange={e => setPostalcode(e.target.value)} 
                    value = {postalcode} 
                    placeholder="Postal Code" />
                </CCol>
              </CFormGroup>

              {/*<CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Role</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                <CSelect custom name="role" id="role" onChange={this.setAddUser} value = {this.state.role} >
                  <option value="0">Please select</option>
                  <option value="1" selected >Role #1</option>
                  <option value="2">Role #2</option>
                </CSelect>
                </CCol>
              </CFormGroup>*/}

              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Address</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                      name="address"
                      id="address"
                      rows="9"
                      placeholder="Address..."
                      onChange={e => setAddress(e.target.value)} 
                      value = {address}
                    />
                </CCol>
              </CFormGroup>

              {/* <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text-input">Image</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInputFile
                   multiple={ true }
                   name = "baseImage"
                   id = "baseImage"
                   onChange={e => setImage(e.target.value)}

                  />

                </CCol>
              </CFormGroup> */}
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
