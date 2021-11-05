import React from 'react'
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

class ViewShift extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData : []
    }
  }

  getStudentTable = async () => {
    let subURl = "requests.php?type=viewStudent";
    var that = this;
    var postJson = {
      allStaff:true
    }
    axios({
      method: 'POST',
      url: Common.baseURl+subURl,
      mode: 'no-cors',
      headers: {'Content-Type':'application/json'},
      data: postJson
    }).then(function (response) {
        if (response.data.response_code == "200"){
          console.log(response.data.data)
          that.setState({ studentData : response.data.data})

        } else {
          toast.error("Failed !" , {
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
    });
  }

  componentWillMount = () => {
    this.getStudentTable();
  }

  deleteItem(id) {
    let subURl = "requests.php?type=deleteShift";
    var that = this;
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
      that.getStudentTable();
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
  render() {
    const getBadge = Remove => {
        return 'danger'
    }
    const getBadge1 = status => {
      switch (status) {
        case 'A': return 'success'
        case 'D': return 'warning'
        default: return 'primary'
      }
    }


    const fields = ['Name','Gender','Email', 'Age','Height','Weight','BloodGroup','Status','Remove']
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                Shift Table
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={this.state.studentData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots = {{
                  'status':
                    (item)=>(
                      <td>
                        <CBadge color={getBadge1(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )
                }}
                scopedSlots = {{
                  'Remove':
                    (item)=>(
                      <td>
                        <CButton color={getBadge(item.Remove)}  onClick={() => this.deleteItem(item.Remove)} >
                          {/*{item.Remove}*/}
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
}
export default ViewShift;
