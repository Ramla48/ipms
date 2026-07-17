import React from 'react'
import { TopHeader } from './TopHeader'
import SideBar from './SideBar'

const StudentSupervisorList = () => {
  return (
    <>
         <div className="bg-light h-fixed-md">
            <TopHeader/>
            <div className='d-flex'>
            <SideBar/>
                <div className='container-fluid mt-5'>

                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">

                            <div className="card border-0 shadow-sm rounded-0">
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-md-10">
                                        <p className="h4 font-f">Superisor list </p>
                                    </div>
                                    </div>
                                    
                                    <table className='table table-hover table-bordered mt-4' id='student-table'>

                                    <thead>
                                        <tr>
                                        <th>S/N</th>
                                        <th>Position</th>
                                        <th>Supervisor name</th>
                                        <th>Phone number</th>
                                        <th>Office name/ Institute name</th>
                                        <th>Start date</th>
                                        <th>End date</th>
                                        <th>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                       <tr>
                                            <td>1</td>
                                            <td>data</td>
                                            <td>daat</td>
                                            <td>dat</td>
                                            <td>d,cnc</td>
                                            <td>dat</td>
                                            <td>d,cnc</td>
                                            <td>d,cnc</td>
                                       </tr>
                                        {/* {students.map((student, index) => (
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
                                        ))} */}

                                    </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default StudentSupervisorList