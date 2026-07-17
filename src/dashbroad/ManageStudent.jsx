import React ,{useEffect, useState} from 'react'
import { TopHeader } from './TopHeader'
import SideBar from './SideBar'
import $ from 'jquery';
import 'datatables.net-bs5';
import { useNavigate } from 'react-router-dom'
import { deleteStudent, studentList } from '../services/StudentService';
// import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'; 

const ManageStudent = () => {

  const studentDataTable = () => {

    const table = $('#student-table');
    if (!$.fn.DataTable.isDataTable(table)) {
      table.DataTable({
        columnDefs: [{
              targets: [-1],
              orderable: false
            }]
      });
    }

  }
  
  const [students, setStudents] = useState([]);

  useEffect(() => {


    fetchAllStudent();

    studentDataTable();
  
  }, []);

  const fetchAllStudent = () =>{

    studentList().then((response) => {
      setStudents(response.data);
    }).catch(error => {
      console.error(error);
      
    });

  }

  const navigator = useNavigate();

  const addNewStudent = () => {
    navigator("/registerStudent");
  }

  const updateStudent = (id) =>{
    navigator(`/editStudent/${id}`);
  }

  const removeStudent = (id) =>{
    console.log(id);

    deleteStudent(id).then((response) => {

        fetchAllStudent();
      
    } ).catch(error =>{
      console.error(error);
    }) 
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
                            <p className="h4 font-f">Students list</p>
                          </div>
                          <div className="col-md-2">
                            <button className='btn btn-primary' onClick={addNewStudent}>Add student</button>
                              {/* <Link to="/registerStudent" className='btn btn-primary'>Add student</Link> */}
                          </div>
                        </div>
                        
                        <table className='table table-hover table-bordered mt-4' id='student-table'>

                          <thead>
                            <tr>
                              <th>S/N</th>
                              <th>Reg number</th>
                              <th>Full name</th>
                              <th>Phone number</th>
                              <th>Email address</th>
                              <th>Institute name</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>

                          <tbody>

                            {students.map((student, index) => (
                              <tr key={index}>
                                      <td>{index + 1}</td>
                                        <td>{student.regNo}</td>
                                        <td> {student.instituteName + " "+student.lastName }</td>
                                        <td>{student.phoneNumber}</td>
                                        <td>{student.email}</td>
                                        <td>{student.firstName}</td>
                                        <td >
                                          <button className='btn btn-success' onClick={() => updateStudent(student.id)}>Edit</button>
                                        </td>
                                        <td>
                                          <button className='btn btn-danger' onClick={() => removeStudent(student.id)}>Delete</button>
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

export default ManageStudent