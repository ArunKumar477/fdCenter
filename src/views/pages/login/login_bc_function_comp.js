import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Common from "../../helper/Common.js"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react';
import history from '../../../history';
import {useDispatch} from 'react-redux';

const Login = (props) => {

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginApi = async () =>{
    if(mobile === ""){
      toast.warn("Please enter Your Mobile Number" , {
                    autoClose: 3000,
                    hideProgressBar: true,
                    });
      return false;
    }
    else if (password === "") {
      toast.warn("Please enter Your Password" , {
                    autoClose: 3000,
                    hideProgressBar: true,
                    });
      return false;
    }
    let subURl = "requests.php?type=login";
    var postJson = {
                      mobile: mobile,
                      password: password
                    }
    axios({
      method: 'POST',
      url: Common.baseURl+subURl,
      responseType: 'stream',
      headers: {'Content-Type':'application/json'},
      data: postJson
    })
    .then(function (response) {

      if (response.data.response_code === "200"){
          toast.success("Login Success!", {
            autoClose: 2000,
            hideProgressBar: true,
          });
          dispatch({type:'isLoggedIn'})
         // history.push('/dashboard');
          history.push({
            pathname:  "/dashboard"
            // state: {
            //   response: messageFromServer 
            // } 
         });

        //window.location.reload();
      }else {
          toast.error("Login Failed !" , {
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
    });
  }    
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-6">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text"
                      id= "mobile"
                      name = "mobile"
                      onChange={e => setMobile(e.target.value)}
                      value={mobile}
                      placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password"
                      id= "password"
                      value={password}
                      name = "password"
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                    <CCol xs="6" >
                      <CButton color="link" className="px-0">Forgot password?</CButton>
                    </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="primary" className="px-4"  onClick={() => loginApi()} >Login</CButton>
                      </CCol>
                      <ToastContainer />
                    </CRow>
                    <center>
                      <CButton color="link" className="mt-3" active tabIndex={-1} >Register Now!</CButton>
                    </center>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
export default Login