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

const ViewNotes = () => {
  const [notesData, setNotesData] = useState([]);
  const [modal, setModal] = useState(false)
  const [selectfolder, setSelectfolder] = useState([]);
  const [selectFolderVal, setSelectFolderVal] = useState([]);
  const [selectClass, setSelectClass] = useState([]);
  const [selectClassVal, setSelectClassVal] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);


	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};


  const handleSubmission = async () => {
		const formData = new FormData();
		formData.append('File', selectedFile);

    const staff_id = '2';


    var postJson = {
      fileName : selectedFile.name,
      fileType : selectedFile.type,
      selectFolderVal:selectFolderVal,
      selectClassVal : selectClassVal,
      formData : formData,
      staff_id : staff_id
    }
        let subURl = "requests.php?type=fileUpload";
        await axios({
          method: 'POST',
          url: Common.baseURl + subURl,
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          data: postJson
        }).then(function (response) {
            if (response.data.response_code === 200) {
              setSelectFolderVal('');
              setSelectClassVal('');
                setModal(false);
                toast.success("Data Saved!", {
                  autoClose: 3000,
                  hideProgressBar: true,
                });
            } else {
            
            }
        });
  }






  const getFolderList = async () => {
    let subURl = "requests.php?type=getFolder";
    await axios({
      method: 'POST',
      url: Common.baseURl + subURl,
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
    }).then(function (response) {
      if (response.data.response_code === 200) {
        setSelectfolder(response.data.data);
        console.log(selectfolder)
      } else {
        toast.error("Failed !", {
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    });
  }

  const getClassList = async () => {
    let subURl = "requests.php?type=getClass";
    await axios({
      method: 'POST',
      url: Common.baseURl + subURl,
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
    }).then(function (response) {
      if (response.data.response_code === 200) {
        setSelectClass(response.data.data);
      } else {
        toast.error("Failed !", {
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    });
  }


  useEffect(() => {
    getFolderList();
    getClassList();
    var postJson = {
      staffId: '2'
    }
    let subURl = "requests.php?type=viewNotesStaff";
    axios({
      method: 'POST',
      url: Common.baseURl + subURl,
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      data: postJson
    }).then(function (response) {
      if (response.data.response_code === 200) {
        setNotesData(response.data.data);
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

  const fields = ['StaffName', 'ClassName', 'FolderName', 'CreateDate', 'DaysRemaining', 'View']

  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Notes

              <CButton
                style={{ marginLeft: '90%' }} color='primary'
                onClick={() => setModal(!modal)}
                className="mr-1"
              >Upload Notes</CButton>


              <CModal
                show={modal}
                onClose={setModal}
              >
                <CModalHeader closeButton>
                  <CModalTitle>File Upload</CModalTitle>
                </CModalHeader>
                <CModalBody>

                  <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Class Name</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect custom name="selectClassVal" id="selectClassVal" onChange={e => setSelectClassVal(e.target.value)} value={selectClassVal} >
                          <option value="0">Please select</option>
                          {selectClass.map(item => (
                            <option key={item.id} value={item.id}>
                              {item.class_name}
                            </option>
                          ))}
                        </CSelect>
                      </CCol>
                    </CFormGroup>


                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">Folder Name</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect custom name="selectFolderVal" id="selectFolderVal" onChange={e => setSelectFolderVal(e.target.value)} value={selectFolderVal} >
                          <option value="0">Please select</option>
                          {selectfolder.map(item => (
                            <option key={item.id} value={item.id}>
                              {item.folder_name}
                            </option>
                          ))}
                        </CSelect>
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">file</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">

                        <CInputFile type="file" name="file" onChange={changeHandler} />
                              {isSelected ? (
                                <div>
                                  <p>Filename: {selectedFile.name}</p>
                                  <p>Filetype: {selectedFile.type}</p>
                                  <p>Size in bytes: {selectedFile.size}</p>
                                  <p>
                                    lastModifiedDate:{' '}
                                    {selectedFile.lastModifiedDate.toLocaleDateString()}
                                  </p>
                                </div>
                              ) : (
                                <p>Select a file to show details</p>
                              )}

                      </CCol>
                    </CFormGroup>
                  </CForm>
                </CModalBody>
                <CModalFooter>
                  <CButton color="primary" onClick={handleSubmission} >Submit</CButton>{' '}
                  <CButton
                    color="secondary"
                    onClick={() => setModal(false)}
                  >Cancel</CButton>
                </CModalFooter>
              </CModal>

            </CCardHeader>


            <CCardBody>
              <CDataTable
                items={notesData}
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
                        <a href={notesData.Location} >
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
export default ViewNotes;
