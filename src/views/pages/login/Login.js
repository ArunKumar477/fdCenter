import React, {useState,useEffect} from 'react'
import 'react-router-dom'
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
import _ from 'lodash'
import { useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router";
import {LoginSatatus} from "../../../action";



const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
const [mobile,setMobile] = useState('');
const [password,setPassword] = useState('');


const checkLogin = useSelector(state=>_.get(state, 'AuthReduser.checkLogin', {} ));

//const checkLogin = useSelector(state => state.AuthReduser.checkLogin); // Rule 1: call hooks in top-level

  const checkLoginApi = () => {
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
    let subURl = "requests.php?type=adminLogin";
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
            //dispatch(LoginSatatus(response.data.userId))
            //alert(JSON.stringify(LoginSatatus.userId))
            if (response.data.response_code === "200"){
              toast.success("Login Success!", {
                autoClose: 3000,
                hideProgressBar: true,
              });
              history.push('/dashboard')

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
                      value={mobile}
                      onChange={e => setMobile(e.target.value)}
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
                        <CButton color="primary" className="px-4" onClick={()=> checkLoginApi()}>Login</CButton>
                      </CCol>
                      <ToastContainer />
                    </CRow>
                    <center>
                      <CButton color="link" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
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