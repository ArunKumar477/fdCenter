import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import {
  CCard,
  CBadge,
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Common from "../../helper/Common.js";

const ViewStaff = () => {
  const [userData,setUserData] = useState([]);



  const getStaffTable = async () => {
    const subURl = "requests.php?type=viewStaff";
    var postJson = {
      allStaff:true
    }
    await  axios({
        method: 'POST',
        url: Common.baseURl+subURl,
        mode: 'no-cors',
        headers: {'Content-Type':'application/json'},
        data:postJson
      }).then(function (response) {
        //alert(JSON.stringify(response.data.response_code))
          if (response.data.response_code === "200"){
            //alert(JSON.stringify(response.data.data))
            setUserData(response.data.data);

          } else {
            toast.error("Failed !" , {
              autoClose: 3000,
              hideProgressBar: true,
            });
          }
      });
  }
  useEffect (()=>{
    getStaffTable();

    /*getUserTable = async () => {
      let subURl = "requests.php?type=viewStaff";
      axios({
        method: 'POST',
        url: Common.baseURl+subURl,
        mode: 'no-cors',
        headers: {'Content-Type':'application/json'},
      }).then(function (response) {
          if (response.data.response_code === "200"){
            console.log(response.data.UserData)
            alert(JSON.stringify(response.data.UserData))
            //that.setState({ UserData : response.data.UserData})
          } else {
            toast.error("Failed !" , {
              autoClose: 3000,
              hideProgressBar: true,
            });
          }
      });
    }*/
  },[])

  /*getUserTable = async () => {
    let subURl = "requests.php?type=viewUser";
    axios({
      method: 'POST',
      url: Common.baseURl+subURl,
      mode: 'no-cors',
      headers: {'Content-Type':'application/json'},
    }).then(function (response) {
        if (response.data.response_code == "200"){
          console.log(response.data.UserData)
          //  alert(JSON.stringify(response.data.UserData))
          that.setState({ UserData : response.data.UserData})
        } else {
          toast.error("Failed !" , {
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
    });
  }

  deleteItem(id) {
    let subURl = "requests.php?type=deleteUser";
    var postJson = {
      id:id
    }
    axios({
      method: 'POST',
      url: Common.baseURl+subURl,
      mode: 'no-cors',
      headers: {'Content-Type':'application/json'},
      data:postJson
    }).then(function (response) {
      that.getUserTable();
      console.log(JSON.stringify(response.data.response_code))
        if (response.data.response_code == "200"){
          toast.success("Data Saved!", {
            autoClose: 3000,
            hideProgressBar: true,
          });
          return false;
        } else {
          toast.error("Failed !" , {
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
    });
  }
*/

  const getBadge = Remove => {
        return 'danger'
    }
    const getBadge1 = View => {
        return 'primary'
    }

    const fields = ['Name','EmpId','Designation','Qualification','Gender','Mobile','DOJ','ZipCode','Email','Status','Remove']
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                User Table
              </CCardHeader>
              <CCardBody>
                  <CDataTable
                    items={userData}
                    fields={fields}
                    hover
                    striped
                    bordered
                    size="sm"
                    itemsPerPage={10}
                    pagination

                    scopedSlots = {{
                        'Remove':
                          (item)=>(
                            <td>
                              <CButton color={getBadge(item.Remove)} >
                              {/* <CButton color={getBadge(item.Remove)}  onClick={() => deleteItem(item.Remove)} > */}

                                Delete
                              </CButton>
                            </td>
                          )
                    }}
                  />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
export default ViewStaff;
