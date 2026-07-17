import React from 'react'
import SideBar from './SideBar'
import { TopHeader } from './TopHeader'


const ChangePassword = () => {
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
                                    <p className="lead text-center font-f">Change password</p>
                                        
                                        <form action="#" className='px-3'>
                                            <div class="input-group mb-2">
                                                <label htmlFor="old" className='font-f'>Enter old password </label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="password" className="form-control rounded-1"  />
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="new" className='font-f'> Enter new password </label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="password" className="form-control rounded-1"  />
                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="confirm" className='font-f'> Enter confirm password</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="password" className="form-control rounded-1"  />
                                            </div>
                                            <div className="input-group mb-4">
                                                <input type="submit" className="form-control btn btn-warning bg-warning-2  rounded-1" value='Save' />
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

export default ChangePassword