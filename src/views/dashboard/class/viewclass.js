import React, { useEffect, useState } from 'react'
import {
  CCard,
  CBadge,
  CButton,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow, CModal, CModalBody, CModalHeader, CModalFooter, CModalTitle,
  CLabel, CInput, CForm, CFormGroup, CInputFile, CCardFooter, CSelect
} from '@coreui/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Common from "../../helper/Common.js";

const ViewClass = () => {
  const [classData, setClassData] = useState([]);

    const staff_id = '2';


  useEffect(() => {

    var postJson = {
      staffId: '2'
    }
    let subURl = "requests.php?type=viewClass";
    axios({
      method: 'POST',
      url: Common.baseURl + subURl,
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      data: postJson
    }).then(function (response) {
      if (response.data.response_code === 200) {
        setClassData(response.data.data);
      } else {
        toast.error("Failed !", {
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    });


  }, [])


  const getBadge = Remove => {
    return 'danger'
  }
  const getBadge1 = View => {
    return 'primary'
  }

  const addfile = () => {

  }

  const fields = ['ClassName', 'Staff', 'Status', 'CreateDate', 'View']

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Notes

            </CCardHeader>


            <CCardBody>
              <CDataTable
                items={classData}
                onRowClick={(value) => { console.log("get value", value) }}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination

                scopedSlots={{
                  'View':
                    (item) => (
                      <td>
                        <a href={classData.Location} >
                          View
                        </a>
                      </td>
                    ),
                  'Remove':
                    (item) => (
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
export default ViewClass;
