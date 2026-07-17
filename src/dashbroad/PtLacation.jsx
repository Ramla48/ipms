import React ,{useEffect, useState} from 'react'
import { TopHeader } from './TopHeader'
import SideBar from './SideBar'
import $, { error } from 'jquery';
import { postList } from '../services/PostService';
import {  useNavigate, useParams } from 'react-router-dom';
import { createRequest } from '../services/RequestService';

export const PtLacation = () => {
    const [posts, setPosts] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
  
      const table = $('#pt-table');
      if (!$.fn.DataTable.isDataTable(table)) {
        table.DataTable({
          columnDefs: [{
                targets: [-1],
                orderable: false
              }]
        });
      }
  
      fecthAllPost();
    }, []);
  
    const fecthAllPost = () =>{
      postList().then((response) => {
        setPosts(response.data);
      }).catch(error = () =>{
        console.error(error);
      })
    }

    const addRequest =(id) =>{
        navigator(`/addRequest/${id}`);
      }
  

    
  return (
    <React.Fragment>
        <div className="bg-light h-fixed-md">
            <TopHeader/>
            <div className='d-flex'>
            <SideBar/>
                <div className='container-fluid mt-5'>

                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-9">

                            <div className="card border-0 shadow-sm rounded-0">
                                <div className="card-body">
                                    
                                    <table className='table table-bordered mb-0'>
                                        <thead>
                                            <tr>
                                            <th className='text-center fw-normal'>Available PT location</th>
                                            </tr>
                                        </thead>
                                        </table>
                                        <table className='table table-bordered table-hover' id="pt-table">
                                        <thead>
                                            <tr>
                                            <th className='fw-normal' width='90%'>Description</th>
                                            <th className='fw-normal'>Post date</th>
                                            </tr> 
                                        </thead>

                                        <tbody>
                                        
                                        {posts.map((job, index) => (
                                            <tr key={index}>
                                            <td>
                                                <p>
                                                <span className='fw-bold'>POSITION: </span>
                                                <small>{job.position}</small>
                                                </p>
                                                <p>
                                                <span>Description: </span>
                                                <small>{job.description}</small>
                                                </p>
                                                <p>
                                                <span>PT location: </span>
                                                <small>{job.officeName}</small>
                                                </p>
                                            </td>
                                            <td>
                                                <p>{job.postDate}</p>
                                                <p>
                                                    <button className='btn btn-primary' onClick={() => addRequest(job.id)}>Apply</button>
                                                </p>
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
            </div>
        </div>
    </React.Fragment>
  )
}


export const FieldRequest = () => {
    const navigator = useNavigate();

    const [startDate, setStartDate] =  useState('');
    const [endDate, setEndDate] = useState('');

    const [username, setUsername] = useState('');
    useEffect(() => { 
        // get data fromsession
         const storedUsername = localStorage.getItem('user');
    
         if (storedUsername) {
             setUsername(JSON.parse(storedUsername));
         }

    }, []);

    const {id} = useParams();

    const saveRequest = (e) => {
        e.preventDefault();

        if (!startDate || !endDate) {
            alert('Please fill in both Start Date and End Date.');
            return;
        }else {
            let postId = id;
            let studentId = username;
            let status = "Pending";

            const request = {startDate, endDate, postId, studentId, status }

            console.log(request);

            createRequest(request).then((response) => {
                console.log(response.data);
                navigator("/studentRequest");
            }).catch(error => console.error(error));

        }

    }
  return (
    <React.Fragment>
    <div className="bg-light h-fixed-md">
        <TopHeader/>
        <div className='d-flex'> 
        <SideBar/>
            <div className='container-fluid mt-5'>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-5">
                        <div className="card border-0 shadow-sm rounded-0">
                            <div className="card-body">

                                <p className="lead text-center font-f">Field request</p>
                                    
                                    <form action="#" className='px-3'>
                                        <div class="input-group mb-2">
                                            <label htmlFor="old" className='font-f'>Start date:</label> 
                                        </div>
                                        <div class="input-group mb-3">
                                        <input
                                            type="date"
                                            className="form-control rounded-1"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />

                                        </div>
                                        <div class="input-group mb-2">
                                            <label htmlFor="new" className='font-f'> End date :</label> 
                                        </div>
                                        <div class="input-group mb-3">
                                        <input
                                            type="date"
                                            className="form-control rounded-1"
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                       
                                        </div>
                                        <div className="input-group mb-4">
                                            <button  className="form-control btn btn-warning bg-warning-2  rounded-1"  onClick={saveRequest}>Save</button>
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</React.Fragment>
  )
}
