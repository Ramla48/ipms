import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import { TopHeader } from './TopHeader'
import { useNavigate, useParams } from 'react-router-dom'
import { createPost, getPost, updatePost } from '../services/PostService'
// import { error } from 'jquery'

const RegisterPost = () => { 
    const navigator = useNavigate();

    const [position, setPosition] = useState('');
    const [officeName, setOfficeName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const [errors, setErrors] = useState({
        position: '',
        officeName: '',
        amount: '',
        description:''
    })


    const savePost = (e) =>{
        e.preventDefault();

        if (formValidation()) {  // kumbuka kuiweka forValidation() kama ni method 
            let date = new Date().toISOString();
            let postDate = date.substring(0, 10);

            const post = {position, officeName, amount, description, postDate};
            console.log(post);

            if (id) {
                
                updatePost(id, post).then((response) => {
                    console.log(response.data);
                    navigator("/ManagePost");
                }).catch(error => console.error(error))
            } else {

                createPost(post).then((response) =>{
                    console.log(response.data);
                    navigator("/ManagePost");
                }).catch(error  => console.error(error))
            }

        }
    }

    const formValidation = () =>{
        let valid = true;

        const errorrsCopy = {...errors}

        if (position.trim()) {
            errorrsCopy.position = '' 
        } else {
            errorrsCopy.position = 'Position is required. '
            valid = false;
        }

        if (officeName.trim()) {
            errorrsCopy.officeName = '' 
        } else {
            errorrsCopy.officeName = 'Office name is required. '
            valid = false;
        }

        if (amount.trim()) {
            errorrsCopy.amount = '' 
        } else {
            errorrsCopy.amount = 'Amount is required. '
            valid = false;
        }

        if (description.trim()) {
            errorrsCopy.description = '' 
        } else {
            errorrsCopy.description = 'Description is required. '
            valid = false;
        }

        setErrors(errorrsCopy);
        return  valid;

    }

    //  update post

    const {id} = useParams();
    let pageTitle = () => {
        if (id) {
            return <p className="lead text-center font-f">Update post</p>
        } else {
            return <p className="lead text-center font-f">Register post</p>
        }
    }

    useEffect(() => {
        if (id) {
            getPost(id).then((response) => {
                setPosition(response.data.position)
                setAmount(response.data.amount)
                setDescription(response.data.description)
                setOfficeName(response.data.officeName)

            }).catch(error => console.error(error))
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
                                    { pageTitle() }
                                        
                                        <form action="#" className='px-3'>
                                            <div class="input-group mb-2">
                                                <label htmlFor="first" className='font-f'> Student position</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="text" name='position' 
                                                    className={`form-control rounded-1 ${errors.position ? 'is-invalid' : ''}`} 
                                                    placeholder='Enter student position'  
                                                    value={position}
                                                    onChange={(e) => setPosition(e.target.value)} 
                                                />
                                                {errors.position && <div className='invalid-feedback'> {errors.position} </div>}
                                                {/* <select name="gender" className='form-select '>
                                                    <option value="Null">Select student position</option>
                                                    <option value="SUZA">HRM student</option>
                                                    <option value="ZU">LIM student</option>
                                                    <option value="SUZA">PST student</option>
                                                    <option value="ZU">ICT student</option>
                                                </select> */}
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="last" className='font-f'> Office name </label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="text"
                                                    name='officeName'
                                                    placeholder='Enter office name'
                                                    value={officeName}
                                                    className={`form-control rounded-1 ${errors.officeName ? 'is-invalid' : ''}`} 
                                                    onChange={(e) => setOfficeName(e.target.value)}
                                                 />

                                                {errors.officeName && <div className='invalid-feedback'> {errors.officeName} </div>}
                                                {/* <select name="gender" className='form-select '>
                                                    <option value="Null">Select office name</option>
                                                    <option value="SUZA">TBC</option>
                                                    <option value="ZU">EGA</option>
                                                    <option value="SUZA">TRA</option>
                                                    <option value="ZU">ZRA</option>
                                                </select> */}
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="amount" className='font-f'>Enter amount</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="number" 
                                                    className={`form-control rounded-1 ${errors.amount ? 'is-invalid' : ''}`} 
                                                    placeholder="Student amount"  
                                                    value={amount}
                                                    onChange={(e) => setAmount(e.target.value)}
                                                />

                                                {errors.amount && <div className='invalid-feedback'> {errors.amount} </div>}
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="description" className='font-f'>Post decription</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <textarea name="description" 
                                                    className={`form-control rounded-1 ${errors.description ? 'is-invalid' : ''}`} 
                                                    style={{height: '140px'}}
                                                    placeholder='Enter description here ..'
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                 />
                                                   {errors.description && <div className='invalid-feedback'> {errors.description} </div>}
                                            </div>

                                            <div className="input-group mb-4">
                                                <button className='btn btn-warning w-100' onClick={savePost}> Save</button>
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

export default RegisterPost