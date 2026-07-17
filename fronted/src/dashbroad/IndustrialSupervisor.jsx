import React ,{useEffect} from 'react'
import SideBar from './SideBar'
import { TopHeader } from './TopHeader'
import $ from 'jquery';
import 'datatables.net-bs5';
import { Link } from 'react-router-dom'

const IndustrialSupervisor = () => {

  useEffect(() => {
    const table = $('#supervisor-table');
    if (!$.fn.DataTable.isDataTable(table)) {
      table.DataTable({
        columnDefs: [{
              targets: [-1],
              orderable: false
            }]
      });
    }
  }, []);

  const supervisorList = [
    {
      fullName: "Halid salum",
      phoneNumber: "+255 776 565 454",
      office: "TBC",
      gender: "Male"
    },
    {
      fullName: "Saida Mustafah",
      phoneNumber: "+255 718 443 454",
      office: "ZRA",
      gender: "Female"
    },
    {
      fullName: "Subira Maulid",
      phoneNumber: "+255 655 443 454",
      office: "ZIPA",
      gender: "Female"
    },
    {
      fullName: "Mussa Suleiman",
      phoneNumber: "+255 788 443 890",
      office: "TRA",
      gender: "Male"
    }
  ]

  return (
    <React.Fragment>
        <div className="bg-light h-fixed-md">
            <TopHeader/>
            <div className='d-flex'>
            <SideBar/>
            <div className='container-fluid mt-5'>
                    <div className="card border-0 shadow-sm rounded-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-10">
                            <p className="h4 font-f">Industrial supervisor list</p>
                          </div>
                          <div className="col-md-2">
                              <Link to="/registerSupervisor" className='btn btn-primary'>Add supervisor</Link>
                          </div>
                        </div>
                        
                        <table className='table table-hover table-bordered mt-1' id="supervisor-table">

                          <thead>
                            <tr>
                              <th>S/N</th>
                              <th>Full name</th>
                              <th>Phone number</th>
                              <th>Gender</th>
                              <th>Office name</th>
                              <th width='8%'>Edit</th>
                              <th width='8%'>Delete</th>
                            </tr>
                          </thead>

                          <tbody>


                            {supervisorList.map((supervisor, index) => (
                              <tr key={index}>
                                      <td className='text-center'>{index + 1}</td>
                                        <td> {supervisor.fullName}</td>
                                        <td>{supervisor.phoneNumber}</td>
                                        <td>{supervisor.gender}</td>
                                        <td>{supervisor.office}</td>
                                        <td className='text-center'>
                                          <Link className='btn btn-success'>Edit</Link>
                                        </td>
                                        <td className='text-center'>
                                          <Link className='btn btn-danger'>Delete</Link>
                                        </td>
                              </tr>
                            ))}

                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default IndustrialSupervisor