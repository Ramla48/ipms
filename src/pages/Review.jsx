import React from 'react'
import Navmenu from './Navmenu'
import Footer from './Footer'

export default function Review() {
  return (
    <React.Fragment>
        <Navmenu/>
        
        <section id='reviews' className='my-5'>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <p className="h4 text-center">PT Reviews</p>
                        </div>
                        <div className="col-md-2">
                            <img src="img/re.png" alt='first img' className='img-fluid h-100 shadow-sm' />
                        </div>
                    </div>
                    
                    <div class="list-group mt-5">

                    <div className="row mb-4">
                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Resource Management</h5>
                                    
                                    <p className="mb-1">IPTMS helps in managing resources essential for training activities, including facilities, equipment, materials, and human resources. It ensures that the necessary resources are available and adequately utilized throughout the training period.</p>
                                    <small>Review by Haji Saidi</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-half text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Placement and Allocation</h5>
                                    
                                    <p className="mb-1">The system facilitates the placement and allocation of trainees to appropriate departments, projects, or mentors within the industrial setting. It ensures optimal utilization of resources and alignment with trainee interests and learning objectives.</p>
                                    <small>Review by John Komba</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Progress Monitoring and Evaluation</h5>
                                    
                                    <p className="mb-1">IPTMS enables continuous monitoring of trainee progress and performance throughout the training period. It facilitates the assessment of learning outcomes, skill development, and overall effectiveness of the training programs.</p>
                                    <small>Review by Mussa Salum</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-half text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Available field locations</h5>
                                    
                                    <p className="mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum omnis voluptates, tempore at voluptatibus quos consectetur eligendi! Molestiae sunt ducimus aspernatur odio veritatis, tempora voluptates tenetur necessitatibus! Officia, laboriosam eius!</p>
                                    <small>Review by Khamida Issa</small>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Feedback and Reporting</h5>
                                    
                                    <p className="mb-1">LTrainees, mentors, and administrators can provide feedback on training experiences, including strengths, weaknesses, and areas for improvement. The system generates comprehensive reports and analytics to evaluate training effectiveness, identify trends, and inform decision-making.</p>
                                    <small>Review by Bakari Mwamjuma</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-half text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Communication and Collaboration</h5>
                                    
                                    <p className="mb-1">LIPTMS facilitates communication and collaboration among stakeholders involved in the training process. It provides tools for sharing information, scheduling meetings, and fostering interaction between trainees, mentors, supervisors, and administrators.</p>
                                    <small>Review by Rukia Vuai</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Compliance and Regulatory Requirements</h5>
                                    
                                    <p className="mb-1">The system ensures compliance with industry standards, regulations, and accreditation requirements governing practical training programs. It helps in maintaining documentation, records, and audit trails to demonstrate adherence to compliance standards.</p>
                                    <small>Review by Huthyman adam</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-half text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Training Program Management</h5>
                                    
                                    <p className="mb-1">IPTMS enables administrators to create, manage, and schedule different types of training programs offered by the industrial organization. This involves defining program objectives, curriculum, duration, and required resources.</p>
                                    <small>Review by RCP</small>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5">
                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Resource Management</h5>
                                    
                                    <p className="mb-1">IPTMS helps in managing resources essential for training activities, including facilities, equipment, materials, and human resources. It ensures that the necessary resources are available and adequately utilized throughout the training period.</p>
                                    <small>Review by Haji Saidi</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-half text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                        <i className="bi bi-star text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Placement and Allocation</h5>
                                    
                                    <p className="mb-1">The system facilitates the placement and allocation of trainees to appropriate departments, projects, or mentors within the industrial setting. It ensures optimal utilization of resources and alignment with trainee interests and learning objectives.</p>
                                    <small>Review by John Komba</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                        <i className="bi bi-star-fill text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Progress Monitoring and Evaluation</h5>
                                    
                                    <p className="mb-1">IPTMS enables continuous monitoring of trainee progress and performance throughout the training period. It facilitates the assessment of learning outcomes, skill development, and overall effectiveness of the training programs.</p>
                                    <small>Review by Mussa Salum</small>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="list-group-item py-3">
                                    <div className="pb-2">
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-half text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>
                                    </div>
                                    <h5 className="mb-1">Available field locations</h5>
                                    
                                    <p className="mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum omnis voluptates, tempore at voluptatibus quos consectetur eligendi! Molestiae sunt ducimus aspernatur odio veritatis, tempora voluptates tenetur necessitatibus! Officia, laboriosam eius!</p>
                                    <small>Review by Khamida Issa</small>
                                </div>
                            </div>
                        </div>


                    </div>
            </div>
        </section>

        <Footer/>
    </React.Fragment>
  )
}
