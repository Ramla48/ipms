import React, { useEffect, useState } from 'react'
import { TopHeader } from './TopHeader'
import SideBar from './SideBar'
import { useNavigate, useParams } from 'react-router-dom'
import { createSupervisor, getSupervisor, updateSupervisor } from '../services/SupervisorService'
import { createLogin } from '../services/LoginService';

const RegisterSupervisor = () => {

    const navigator = useNavigate();

    let [supervisorId, setSupervisorId] = useState('');
    const [firstName , setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [officeName, setOfficeName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [errors, setErrors] = useState({
        // supervisorId: '',
        firstName:'',
        lastName:'',
        gender:'',
        officeName:'',
        phoneNumber:''
    })

    const saveSupervisor = (e) =>{
        e.preventDefault();
        if (formValidation()) {
            let numbers = "12341234567890123455678901234561234123456789785678901234567890";
            let sub = Array.from({ length: 6 }, () => numbers.charAt(Math.floor(Math.random() * numbers.length))).join('');

            if (id) {
                
                const updatedSupervisor = {firstName, lastName, gender, phoneNumber, officeName, supervisorId}
                updateSupervisor(id, updatedSupervisor).then((response) => {
                    console.log(response.data);
                     navigator("/AcademicSupervisor");
                 }).catch(error => console.error(error))

            } else {

                let role = "SUPERVISOR";
                supervisorId = "SU"+(firstName.charAt(0) + firstName.charAt(1) + lastName.charAt(0) + lastName.charAt(1)).toUpperCase() + sub;
                let supervisor = {firstName, lastName, gender, phoneNumber, officeName, supervisorId}

                let username = supervisorId;
                let password = supervisorId;
    
                const user = {username, password, role}

                createSupervisor(supervisor).then((response) => {
                    
                    console.log(response.data);
                    createLogin(user).then((response) => {
                        console.log(response.data);
                        navigator("/AcademicSupervisor");
                    }).catch(error => console.error(error)) 
                   
                })

            }
        }
    }

    const formValidation = () =>{
        let valid = true;

        const errorrsCopy = {...errors}

        // if (supervisorId.trim()) {
        //     errorrsCopy.supervisorId = '' 
        // } else {
        //     errorrsCopy.supervisorId = 'supervisor Id is required. '
        //     valid = false;
        // }

        if (phoneNumber.trim()) {
            errorrsCopy.phoneNumber = '' 
        } else {
            errorrsCopy.phoneNumber = 'pPhone number is required. '
            valid = false;
        }

        if (officeName.trim()) {
            errorrsCopy.officeName = '' 
        } else {
            errorrsCopy.officeName = 'Office name is required. '
            valid = false;
        }

        if (firstName.trim()) {
            errorrsCopy.firstName = '' 
        } else {
            errorrsCopy.firstName = 'First name is required. '
            valid = false;
        }

        if (lastName.trim()) {
            errorrsCopy.lastName = '' 
        } else {
            errorrsCopy.lastName = 'Last name is required. '
            valid = false;
        }

        if (gender.trim()) {
            errorrsCopy.gender = '' 
        } else {
            errorrsCopy.gender = 'Gender is required. '
            valid = false;
        }

        setErrors(errorrsCopy);
        return  valid;

    }

    //  update supervisor
     const {id} = useParams();
     let title = () => {
        if (id) {
            return <p className="lead text-center font-f">Update supervisor</p> 
        } else {
            return <p className="lead text-center font-f">Register  supervisor</p>
        }
     }

     useEffect(() =>{
        if (id) {
            getSupervisor(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setGender(response.data.gender)
                setPhoneNumber(response.data.phoneNumber)
                setSupervisorId(response.data.supervisorId)
                setOfficeName(response.data.officeName)

            }).catch(error => console.error(error));   
        }
     }, [id])

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
                                    {title()}
                                        
                                        <form action="#" className='px-3'>
                                            <div class="input-group mb-2">
                                                <label htmlFor="first" className='font-f'>Enter first name </label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="text" 
                                                    className={`form-control rounded-1 ${errors.firstName ? 'is-invalid' : ''}`} 
                                                    placeholder="First name" 
                                                    value={firstName}
                                                    onChange={(e)=> setFirstName(e.target.value)}
                                                />
                                                 {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>} 
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="last" className='font-f'>Enter last name </label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="text" 
                                                className={`form-control rounded-1 ${errors.lastName ? 'is-invalid' : ''}`} 
                                                 placeholder="Last name"  
                                                 value={lastName}
                                                 onChange={(e)=> setLastName(e.target.value)}
                                                />
                                                {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>} 
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="phone" className='font-f'>Enter phone number </label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="tel" 
                                                className={`form-control rounded-1 ${errors.phoneNumber ? 'is-invalid' : ''}`} 
                                                 placeholder="Phone number"  
                                                 value={phoneNumber}
                                                 onChange={(e)=> setPhoneNumber(e.target.value)}
                                                 />
                                                 {errors.phoneNumber && <div className='invalid-feedback'> {errors.phoneNumber} </div>} 
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="email" className='font-f'>Select gender</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <select name="gender"  
                                                    className={`form-select rounded-1 ${errors.gender ? 'is-invalid' : ''}`} 
                                                    onChange={(e)=> setGender(e.target.value)}
                                                    value={gender}
                                                >
                                                    <option value=""> Select gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                                {errors.gender && <div className='invalid-feedback'> {errors.gender} </div>} 
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="email" className='font-f'>Enter office / institute name</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                            <input type="text" 
                                                className={`form-control rounded-1 ${errors.officeName ? 'is-invalid' : ''}`} 
                                                 placeholder="Enter office or institute name"  
                                                 value={officeName}
                                                 onChange={(e)=> setOfficeName(e.target.value)}
                                                 />
                                                 {errors.officeName && <div className='invalid-feedback'> {errors.officeName} </div>} 
                                            </div>
                                            {/* <div class="input-group mb-2">
                                                <label htmlFor="email" className='font-f'>Supervisor Id</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                            <input type="text" 
                                                className={`form-control rounded-1 ${errors.supervisorId ? 'is-invalid' : ''}`} 
                                                 placeholder="Enter office or institute name"  
                                                 value={supervisorId}
                                                 onChange={(e)=> setSupervisorId(e.target.value)}
                                                 />
                                                 {errors.supervisorId && <div className='invalid-feedback'> {errors.supervisorId} </div>} 
                                            </div> */}
                                            <div className="input-group mb-4">
                                                <button className='btn btn-warning w-100' onClick={saveSupervisor}>Save</button>
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

export default RegisterSupervisor