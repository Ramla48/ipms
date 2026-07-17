import React from 'react'
import Navmenu from './Navmenu'
import Footer from './Footer'

export default function ContactUs() {
  return (
    <React.Fragment>
        <Navmenu/>
        
        <section id="contact" className='bg-light mt-5 py-5'>
            <div className="container-md">
                <div className="row my-5">
                    <div className="col-md-8">
                        <p className="lead">
                            Industrial Practical Traning Management System (IPMS) is a comprehensive software solution designed to streamline and optimize the management of practical training programs within industrial settings. This system encompasses various functionalities aimed at facilitating the planning, coordination, execution, monitoring, and evaluation of practical training activities for students or employees undergoing industrial training.

                            Key features of an IPMS typically include: Student/Employee Registration: The system allows for the registration of students or employees who are participating in practical training programs. This includes capturing essential details such as personal information, educational background, and training preferences.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src="img/review.png" alt='first img' className='img-fluid h-100 shadow-sm' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <p className="lead text-center fw-normal">Add your comments here </p>
                                <form action="#">
                                    <label for="email" class="form-label">Email address:</label>
                                    <div class="mb-4 input-group">
                                        <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
                                        <input type="email" class="form-control" placeholder="Eg. suleimanhaji@me.you"/>
                                        
                                    </div>
                                    <label for="email" class="form-label">Full name:</label>
                                    <div class="mb-4 input-group">
                                        <span class="input-group-text"><i class="bi bi-person"></i></span>
                                        <input type="text" class="form-control" placeholder="Haji juma bakari"/>
                                        
                                    </div>
                                    <label for="email" class="form-label">Enter comments:</label>
                                    <div class="form-floating mb-3 mt-3">
                                        <textarea name="" id="query" class="form-control" style={{height: '140px'}}></textarea> 
                                        <label for="query" class="form-label">Your comments..</label>
                                    </div>
                                    <div class="mb-4 text-center">
                                        <input type="submit" value={'Send comments'} class="btn btn-outline-warning" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 mt-4 mt-md-0">
                        <img src="img/us.png" alt='first img' className='img-fluid h-100 shadow-sm' />
                    </div>
                </div>
            </div>
               
        </section>

        <Footer/>
    </React.Fragment>
  )
}
