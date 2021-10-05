import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react';
import axios from 'axios';
import Common from "../../helper/Common.js";

class viewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserDataLog : []
    }
  }
  componentWillMount = () => {
    var params = this.props.match.params;
    if(params.id)
    {
      this.setState({ id : params.id })
      let subURl = "requests.php?type=viewUserLog";
      var that = this;
      var postJson = {
        id: params.id,
      }
      axios({
        method: 'POST',
        url: Common.baseURl+subURl,
        mode: 'no-cors',
        headers: {'Content-Type':'application/json'},
        data:postJson
      }).then(function (response) {
        //that.getUserTable();
        console.log(JSON.stringify(response.data.response_code))
        // alert(response.data.UserDataLog)
          if (response.data.response_code == "200"){
            that.setState({ UserDataLog : response.data.UserDataLog })
            return false;
          } else {
            //  alert("error - 1")
          }
      });
    }
  }
  render() {
    const fields = ['Name','Shift','Company','StartTime','EndTime','Duration']
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                User Log Table
              </CCardHeader>
              <CCardBody>
              <CDataTable
                items={this.state.UserDataLog}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
              />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}
export default viewUser;
