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
  CRow,
  CImg
} from '@coreui/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Common from "../../helper/Common.js";

const ViewBanner = () => {
  const [meetingData,setMeetingData] = useState([]);

  useEffect (()=>{
      let subURl = "requests.php?type=viewBannerImg";
      axios({
        method: 'POST',
        url: Common.baseURl+subURl,
        mode: 'no-cors',
        headers: {'Content-Type':'application/json'}
      }).then(function (response) {
          if (response.data.response_code === 200){
            setMeetingData(response.data.data);
          } else {
            toast.error("Failed !" , {
              autoClose: 3000,
              hideProgressBar: true,
            });
          }
      });

  },[])
const deleteItem = () => {
  
}

  const getBadge = Remove => {
        return 'danger'
    }
    const getBadge1 = View => {
        return 'primary'
    }

    const fields = ['ImageUrl','Status','CreateDate']
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                Upcoming Metting Table
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={meetingData}
                onRowClick={ (value) => {console.log("get value",value)}}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination

                scopedSlots = {{
                  'ImageUrl':
                    (item)=>(
                        <CImg
                          src={meetingData.ImageUrl} 
                          fluid
                          className="mb-2"
                          // style={{height:'20',width:'20'}}
                        />
                    ),
                    // 'Remove':
                    //   (item)=>(
                    //     <td>
                    //       <CButton color={getBadge(item.Remove)}  onClick={() => deleteItem(item.Remove)} >

                    //         Delete
                    //       </CButton>
                    //     </td>
                    //   )
                }}
              />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
export default ViewBanner;
