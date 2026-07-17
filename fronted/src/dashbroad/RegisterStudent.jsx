import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { TopHeader } from './TopHeader'
import { createStudent, getStudent, updateStudent } from '../services/StudentService';
import { useNavigate, useParams } from 'react-router-dom';
import { createLogin } from '../services/LoginService';

const RegisterStudent = () => {

   const navigator = useNavigate();

   const [firstName, setFirstName] =  useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   let [regNo, setRegNo] = useState('');
   const [instituteName, setInstituteName] = useState('');
   const [phoneNumber, setPhoneNumber] = useState(''); 

    //  form validation
    const [errors, setErrors] =   useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email:'',
        instituteName:''
   })


   const lastNameHandler = (e) => setLastName(e.target.value);

   const phoneNumberHandler = (e) => setPhoneNumber(e.target.value);

   const emailHandler = (e) =>  setEmail(e.target.value);


   const saveStudent =(e)=> {
    e.preventDefault();

    if (formValidation()) { // formValidation() weka breket 
        let numbers = "12341234567890123455678901234561234123456789785678901234567890";
        let sub = Array.from({ length: 6 }, () => numbers.charAt(Math.floor(Math.random() * numbers.length))).join('');

        if (id) {
            // update student
            const updatedStudent = {firstName, lastName, phoneNumber, instituteName, email, regNo}

            updateStudent(id, updatedStudent).then((response) => {
                console.log(response.data);
                navigator("/ManageStudent");
            }).catch(error => {
                console.error(error);
            })
        } else {
            let role = "STUDENT";
            regNo = (firstName.charAt(0) + firstName.charAt(1) + lastName.charAt(0) + lastName.charAt(1)).toUpperCase() + sub;

            let student = {firstName, lastName, phoneNumber, instituteName, email, regNo}
        
            let username = regNo;
            let password = regNo;
           

            const user = {username, password, role}

            // console.log(user);

            //  register student
            createStudent(student).then((response) =>{
                console.log(response.data);
                createLogin(user).then((response) => {
                    console.log(response.data);
                    navigator("/ManageStudent");
                }).catch(error => console.error(error)) 
                
            }).catch(error => {
                console.error(error);
            })
        }

    }

   }

   const formValidation = () =>{
        let valid = true;

        const errorrsCopy = {...errors} //{...}  spread operator

        if (firstName.trim()) {
            errorrsCopy.firstName = '';
        } else {
            errorrsCopy.firstName = 'First name is required.. ';
            valid = false;
        }

        if (lastName.trim()) {
            errorrsCopy.lastName = '';
        } else {
            errorrsCopy.lastName = 'Last name is required.. ';
            valid = false;
        }

        if (email.trim()) {
            errorrsCopy.email = '';
        } else {
            errorrsCopy.email = 'Email is required.. ';
            valid = false;
        }

        if (phoneNumber.trim()) {
            errorrsCopy.phoneNumber = '';
        } else {
            errorrsCopy.phoneNumber = 'Phone number is required.. ';
            valid = false;
        }

        if (instituteName.trim()) {
            errorrsCopy.instituteName = '';
        } else {
            errorrsCopy.instituteName = 'Institute name is required.. ';
            valid = false;
        }

        setErrors(errorrsCopy);

        return valid;
        
   }

//     update student functions

   const {id} = useParams();

   let pageTitle = () => {

        if (id) {
            return <p className="lead text-center font-f">Update student</p>
        } else{
          return  <p className="lead text-center font-f">Register student</p>
        }
   }

   useEffect(() => {

    if(id){
        getStudent(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setPhoneNumber(response.data.phoneNumber);
            setInstituteName(response.data.instituteName);
            setRegNo(response.data.regNo);
        }).catch(error  => {
            console.error(error);
        })
    }
   }, [id])


  return (
    <React.Fragment>
        <div className="bg-light h-fixed-md">
            <TopHeader/>
            <div className='d-flex'>
            <SideBar/>
                <div className='container-fluid mt-5 '>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-5">
                            <div className="card border-0 shadow-sm rounded-0">
                                <div className="card-body">
                                    { pageTitle() }
                                        
                                        <form action="#" className='px-3'>
                                            <div className="input-group mb-2">
                                                <label htmlFor="first" className='font-f'>Enter first name </label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" 
                                                className={`form-control rounded-1 ${errors.firstName ? 'is-invalid' : ''}`} 
                                                placeholder="First name" value={firstName}
                                                 onChange={(e) =>  setFirstName(e.target.value)}  
                                                />

                                                {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}

                                            </div>
                                            <div className="input-group mb-2">
                                                <label htmlFor="last" className='font-f'>Enter last name </label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text"
                                                className={`form-control rounded-1 ${errors.lastName ? 'is-invalid' : ''}`} 
                                                 placeholder="Last name"  value={lastName} onChange={lastNameHandler} />

                                                {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="phone" className='font-f'>Enter phone number </label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="tel"
                                                 className={`form-control rounded-1 ${errors.phoneNumber ? 'is-invalid' : ''}`} 
                                                    placeholder="Phone number" 
                                                 value={phoneNumber} onChange={phoneNumberHandler} />

                                                {errors.phoneNumber && <div className='invalid-feedback'> {errors.phoneNumber} </div>}

                                            </div>
                                            <div className="input-group mb-2">
                                                <label htmlFor="email" className='font-f'>Enter email address</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="email" 
                                                 className={`form-control rounded-1 ${errors.email ? 'is-invalid' : ''}`} 
                                                 placeholder="Email address"  value={email} onChange={emailHandler} />

                                                {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
                                            </div>
                                            <div className="input-group mb-2">
                                                <label htmlFor="institite" className='font-f'>Enter institute name</label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" 
                                                 className={`form-control rounded-1 ${errors.instituteName ? 'is-invalid' : ''}`} 
                                                 placeholder="Enter institute name"  value={instituteName} onChange={(e) => setInstituteName(e.target.value)} />

                                                {errors.instituteName && <div className='invalid-feedback'> {errors.instituteName} </div>}
                                            </div>
                                            <div className="input-group mb-4">
                                                <button className='btn btn-warning w-100' onClick={saveStudent}>Save</button>
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

export default RegisterStudent