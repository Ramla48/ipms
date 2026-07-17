import React, { useEffect, useState, useCallback } from 'react';
import { TopHeader } from './TopHeader';
import SideBar from './SideBar';
import { deleteRequest, getPendingRequest } from '../services/RequestService';

export const StudentRequest = () => {
    const [requests, setRequest] = useState([]);
    const [username, setUsername] = useState('');

    const fectchMyRequest = useCallback(() => {
        getPendingRequest(username).then((response) => {
            setRequest(response.data);
        }).catch(error => {
            console.error(error);
        });
    }, [username]); 

    useEffect(() => {
        const storedUsername = localStorage.getItem('user');

        if (storedUsername) {
            setUsername(JSON.parse(storedUsername));
        }

        fectchMyRequest();

    }, [username, fectchMyRequest]); 

    const removeRequest = (id) => {
        deleteRequest(id).then(() => {
            fectchMyRequest();
        }).catch(error => console.error(error));
    }

    return (
        <>
            <div className="bg-light h-fixed-md">
                <TopHeader />
                <div className='d-flex'>
                    <SideBar />
                    <div className='container-fluid mt-5'>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div className="card border-0 shadow-sm rounded-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <p className="h4 font-f">Manage request</p>
                                            </div>
                                        </div>
                                        <table className='table table-hover table-bordered mt-4' id='student-table'>
                                            <thead>
                                                <tr>
                                                    <th>S/N</th>
                                                    <th>Position</th>
                                                    <th>Office name</th>
                                                    <th>Start date</th>
                                                    <th>End date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {requests.map((request, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td> Students </td>
                                                        <td> Office name</td>
                                                        <td>{request.startDate}</td>
                                                        <td>{request.endDate}</td>
                                                        <td className='text-warning'><b>{request.status}</b></td>
                                                        <td>
                                                            <button className='btn btn-danger' onClick={() => removeRequest(request.id)}>Delete</button>
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
        </>
    )
}
