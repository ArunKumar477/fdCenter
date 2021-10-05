import React, { lazy, useState,useEffect } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CDataTable,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CLabel,
  CTextarea,
  CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import MainChartExample from '../charts/MainChartExample.js'
import { useSelector } from 'react-redux'
import _ from 'lodash'
//import history from '../../history';
import axios from 'axios';
import Common from "../helper/Common.js";



const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = props => {
  const isUser = useSelector(state => _.get(state, 'AuthReducer.isUser', ""))
  const fields = ['Name','Reason','FromDate','ToDate','Status']
  const [tabName,setTblname] = useState("leave");
  const [open, setOpentab] = useState(false);
  const [leaveRequest,setLeaveRequest] = useState([]);
  const [leaveStatus,setLeaveStatus] = useState([]);

 // setState

  
  //   // console.log('isLoggedIn',isUser);
  //   // if(isUser === true){
  //   //   alert("loggedIn")
  //   // } else {
  //   //   history.push('/');
  //   //   window.location.reload();
  //   // }

  
  const getLeaveRequestStatusTable = async () => {
    let subURl = "requests.php?type=viewLeaveRequestStatus";
   await axios({
      method: "GET",
      url: Common.baseURl + subURl,
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      console.log(JSON.stringify(response.data.leaveRequest));
      if (response.data.response_code == "200") {
        setLeaveStatus( response.data.data );
          //console.log(JSON.stringify(leaveStatus));
        //getLeaveRequestAdmin();
      } else {
      }
    });
  };
  const getLeaveRequestStatus = async () => {

    let subURl = "requests.php?type=viewLeaveRequest";
    await axios({
      method: "GET",
      url: Common.baseURl + subURl,
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }).then(function (response) {
      //console.log(JSON.stringify(response.data.leaveRequest));
      if (response.data.response_code == "200") {
          setLeaveRequest(response.data.data);
      } else {
      }
    });
  };
  useEffect (()=>{
  
    getLeaveRequestStatusTable();

    getLeaveRequestStatus();
},[])
const  approveLeave = async (id) => {
  let subURl = "requests.php?type=leaveApprove";
  var postJson = {
    id: id,
  };
  await axios({
    method: "POST",
    url: Common.baseURl + subURl,
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    data: postJson,
  }).then(function (response) {
    //console.log(JSON.stringify(response));
    if (response.data.response_code === 200) {
      toast.success("Data Saved!", {
        autoClose: 3000,
        hideProgressBar: true,
      });
      getLeaveRequestStatus();
      getLeaveRequestStatusTable();

    } else {
      toast.error("Failed !" , {
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  });
};

  const setReason = (e) => {
    // setState({
    //   [e.target.name]: e.target.value,
    // });
  };
  const setOpen = (status,tabName ) => {
    alert(status)
    //setState({ open: status, tabName });
  };


 const  getLeaveTabContent = () => {
    return (
      <>
        <CModalHeader closeButton>
            <CModalTitle>Denied Leave Request</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CRow>
              <CCol xs="12" md="12">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Reject-Reason</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="reason"
                      id="reason"
                      rows="9"
                      placeholder="Rejection Reason..."
                      onChange={setReason} 
                      // value={reason}
                    />
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            {/* <CButton color="danger" onClick={()=> denied(id)}> */}
            <CButton color="danger">
              Submit
            </CButton>
            {""}
            {/* <CButton color="secondary" onClick={() => setOpen(false)}> */}
            <CButton color="secondary" >
              Cancel
            </CButton>
          </CModalFooter>
      </>
    )
  }

  return (
    <>
      <WidgetsDropdown />
      <WidgetsBrand withCharts/>
      <CRow>
        <CCol xs="12" md="6" xl="6">
          <CCard>
            <CCardHeader>
              Leave Requests
            </CCardHeader>
            <CCardBody>
              <CRow>
              {leaveRequest.map((leaveRequest) => (
                <CCol xs="12" sm="12" md="12">
                <CCard>
                  <CCardHeader>
                    <h5>{leaveRequest.username}</h5>
                    <div className="card-header-actions"></div>
                  </CCardHeader>
                  <CCardBody>
                    <CRow>
                      <CCol xs="12" sm="4" md="4">
                        <div
                          className="c-avatar"
                          style={{
                            width: "60px",
                            height: "60px",
                          }}
                        >
                          <img
                            src={"avatars/1.jpg"}
                            className="c-avatar-img"
                            alt="userImage"
                          />
                        </div>
                        <div className="small text-muted">
                          Requested on :{" "}
                          {leaveRequest.createdate}
                        </div>
                      </CCol>
                      <CCol xs="12" sm="8" md="8">
                        <CRow>
                          <CCol xs="12" sm="4" md="4">
                            <div>Date :</div>
                            <div>Reason :</div>
                            <div>Note :</div>
                          </CCol>
                          <CCol xs="12" sm="8" md="8">
                            <div>
                              {leaveRequest.start_date} -{" "}
                              {leaveRequest.end_date}
                            </div>
                            <div>{leaveRequest.reason}</div>
                            <div>
                              {leaveRequest.discreption}
                            </div>
                            <br />
                            <CRow>
                              <CCol xs="12" xl="6" lg="6" sm="12" md="12">
                                <CButton
                                  shape="pill"
                                  onClick={() =>
                                    approveLeave(
                                      leaveRequest.id
                                    )
                                  }
                                  block
                                  color="success"
                                >
                                  Approve
                                </CButton>
                              </CCol>
                              <CCol xs="12" xl="6" lg="6" sm="12" md="12">
                                <CButton
                                  shape="pill"
                                  onClick={() => {
                                    const setOpen =()=>(true, 'leave');

                                    // const setState=()=>({
                                    //   //id: leaveRequest.id,
                                    // });
                                  }}
                                  block
                                  color="danger"
                                >
                                  Denied
                                </CButton>
                              </CCol>
                            </CRow>
                          </CCol>
                        </CRow>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCard>
                </CCol>
              ))}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" md="6" xl="6">
          <CCard>
              <CCardHeader>
                Request Log
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12" md="12" xl="12">

                  <CCardBody>
                  <CDataTable
                    items={leaveStatus}
                    fields={fields}
                    hover
                    striped
                    bordered
                    size="sm"
                    itemsPerPage={10}
                    pagination

                    
                  />
                  </CCardBody>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
        </CCol>
      </CRow>



      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Traffic {' & '} Sales
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="12" xl="12">
                </CCol>
              </CRow>

              <br />

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>User</th>
                    <th className="text-center">Country</th>
                    <th>Usage</th>
                    <th className="text-center">Payment Method</th>
                    <th>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-us" title="us" id="us" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="50" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-mastercard" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">

                        <span>Recurring</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-br" title="br" id="br" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>10%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="10" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-visa" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>5 minutes ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Quintin Ed</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-in" title="in" id="in" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>74%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="warning" value="74" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-stripe" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>1 hour ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/4.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-secondary"></span>
                      </div>
                    </td>
                    <td>
                      <div>Enéas Kwadwo</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-fr" title="fr" id="fr" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>98%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="danger" value="98" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-paypal" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last month</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/5.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Agapetus Tadeáš</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-es" title="es" id="es" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>22%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="info" value="22" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-google-pay"/>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Last week</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/6.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Friderik Dávid</div>
                      <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div>
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cif-pl" title="pl" id="pl" />
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>43%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="success" value="43" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-amex" />
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <strong>Yesterday</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
