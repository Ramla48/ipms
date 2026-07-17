import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { TopHeader } from './TopHeader'
import { getStudentByRegno, updateStudentByRegno } from '../services/StudentService';
import { useNavigate } from 'react-router-dom';


const MyProfile = () => {
    const navigator = useNavigate();
    const [firstName, setFirstName] =  useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [instituteName, setInstituteName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); 

    const [username, setUsername] = useState('');

    useEffect(() => {
        // Retrieve data from localStorage
        const storedUsername = localStorage.getItem('user');
    
        // Parse JSON if data exists
        if (storedUsername) {
            setUsername(JSON.parse(storedUsername));
        }

       // profile data 

        if(username){
            getStudentByRegno(username).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setPhoneNumber(response.data.phoneNumber);
                setInstituteName(response.data.instituteName);
            }).catch(error  => {
                console.error(error);
            })
        }

      }, [username]);

      const saveProfile = (e) =>{
        const student = {firstName, lastName, phoneNumber, email}
        e.preventDefault();
        if (username) {
            // cupdate student data
            console.log("wait to update data here ");

            updateStudentByRegno(username, student).then((response) => {
                console.log(response.data);
                navigator("/Home");
            }).catch(error => {
                console.error(error);
            })
            
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
                                    <p className="lead text-center font-f">My profile</p>
                                        
                                        <form action="#" className='px-3'>
                                            <div class="input-group mb-2">
                                                <label htmlFor="first" className='font-f'>First name </label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="text" className="form-control rounded-1" value={firstName}
                                                 onChange={(e) =>  setFirstName(e.target.value)}   />

                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="last" className='font-f'> Last name </label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="text" className="form-control rounded-1" value={lastName}
                                                 onChange={(e) =>  setLastName(e.target.value)}   />
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="phone" className='font-f'> Phone number </label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="tel" className="form-control rounded-1" value={phoneNumber}
                                                 onChange={(e) =>  setPhoneNumber(e.target.value)}   />
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="email" className='font-f'> Email address</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="email" className="form-control rounded-1" value={email}
                                                 onChange={(e) =>  setEmail(e.target.value)}   />
                                            </div>
                                            <div class="input-group mb-3">
                                                <input readOnly type="email" className="form-control rounded-1" value={instituteName}
                                                 onChange={(e) =>  setInstituteName(e.target.value)}   />
                                            </div>
                                            <div className="input-group mb-4">
                                                <button onClick={saveProfile} className="form-control btn btn-warning bg-warning-2  rounded-1">Save</button>
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

export default MyProfile