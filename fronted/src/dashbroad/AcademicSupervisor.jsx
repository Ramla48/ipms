import React ,{useEffect, useState} from 'react'
import SideBar from './SideBar'
import { TopHeader } from './TopHeader'
import $ from 'jquery';
import 'datatables.net-bs5';
import { useNavigate } from 'react-router-dom'
import { deleteSupervisor, supervisorList } from '../services/SupervisorService';


const AcademicSupervisor = () => {

  const navigator = useNavigate();

  const [supervisors, setSupervisors] = useState([]);


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

    fecthAllSupervisor();
  }, []);

  const fecthAllSupervisor = () =>{

    supervisorList().then((response) => {
      setSupervisors(response.data);
    }).catch(error => {
      console.error(error);
      
    });
  }

  // update supervisor 
  const changeSupervisor = (id) => {
    navigator(`/editSupervisor/${id}`);
  }

  // remove supervisor 
    const removeSupervisor = (id) =>{
      console.log(id);
      deleteSupervisor(id).then(() => {
        fecthAllSupervisor();
      }).catch(error => console.error(error))
    }

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
                            <p className="h4 font-f">Manage supervisors</p>
                          </div>
                          <div className="col-md-2">
                              <button  className='btn btn-primary' onClick={() => navigator("/registerSupervisor")}>Add supervisor</button>
                          </div>
                        </div>
                        
                        <table className='table table-hover table-bordered mt-1' id="supervisor-table">

                          <thead>
                            <tr>
                              <th>S/N</th>
                              <th>Supervisor ID</th>
                              <th>Full name</th>
                              <th>Phone number</th>
                              <th>Gender</th>
                              <th>Institute name</th>
                              <th width='8%'>Edit</th>
                              <th width='8%'>Delete</th>
                            </tr>
                          </thead>

                          <tbody>


                            {supervisors.map((supervisor, index) => (
                              <tr key={index}>
                                      <td className='text-center'>{index + 1}</td>
                                      <td>{supervisor.supervisorId}</td>
                                        <td> {supervisor.firstName +" "+ supervisor.lastName}</td>
                                        <td>{supervisor.phoneNumber}</td>
                                        <td>{supervisor.gender}</td>
                                        <td>{supervisor.officeName}</td>
                                        <td className='text-center'>
                                          <button className='btn btn-success' onClick={() => changeSupervisor(supervisor.id)}>Edit</button>
                                        </td>
                                        <td className='text-center'>
                                          <button className='btn btn-danger' onClick={() => removeSupervisor(supervisor.id)}>Delete</button>
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

export default AcademicSupervisor