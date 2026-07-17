// Home.jsx

import React from 'react';
import Navmenu from './Navmenu';
import Footer from './Footer'


const Home = () => {

    const firstData = [
        { name: 'Accounting and Auditing', count: 12 },
        { name: 'Banking, Economics and Financial Services', count: 3 },
        { name: 'Physical & Natural Sciences', count: 0 },
        { name: 'Creative and Design', count: 0 },
        { name: 'Education and training', count: 6 },
        { name: 'Engineering and Construction', count: 2 },
        { name: 'Environmental Sciences and Geography', count: 0 }
      ];

      const secondData = [
        { name: 'Farming and Livestock', count: 5 },
        { name: 'Healthcare and Pharmaceutical', count: 0 },
        { name: 'HR & Administration', count: 14 },
        { name: 'International Relations', count: 0 },
        { name: 'IT and Telecoms', count: 10 },
        { name: 'Procurement & Logistic Management', count: 1 },
        { name: 'Project, Planning and Policy Management', count: 16 }
      ];

      const thirdData = [

        { name: 'Project, Planning and Policy Management', count: 1 },
        { name: 'Sociology, Political Science, Community and Social Development', count: 10 },
        { name: 'Taxation and Social Protection', count: 0 },
        { name: 'Climate Change', count: 0 },
        { name: 'Water, Mining and Natural Resources', count: 0 },
        { name: 'Agricultural and Natural Resources', count: 1 }
      ];
      

  return (
    <React.Fragment>

        <Navmenu/>

        <section id='home'>
            <div className="container-fluid">
                <div className="row mx-3">
                    <div className="col-md-9 ">
                        <h1 className='mt-4'>
                            <div className="display-6 fw-normal text-warning-2 mark">Industrial Practical Traning Management System </div>
                        </h1>
                    </div>
                    <div className="col-md-3">
                        <img src="img/team.png" alt='second' className='img-fluid h-100' />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <img src="img/students.png" alt='second' className='img-fluid h-100' />

                    </div>
                    <div className="col-md-7"> 
                        <p className="lead ">
                            Industrial Practical Traning Management System (IPMS) is a comprehensive software solution designed to streamline and optimize the management of practical training programs within industrial settings. This system encompasses various functionalities aimed at facilitating the planning, coordination, execution, monitoring, and evaluation of practical training activities for students or employees undergoing industrial training.
                        </p>

                        <p className="lead">
                             Key features of an IPMS typically include:

                           Student/Employee Registration: The system allows for the registration of students or employees who are participating in practical training programs. This includes capturing essential details such as personal information, educational background, and training preferences.

                        </p>

                        <p className="lead">

                            Placement and Allocation: The system facilitates the placement and allocation of trainees to appropriate departments, projects, or mentors within the industrial setting. It ensures optimal utilization of resources and alignment with trainee interests and learning objectives.
                        </p>

                    </div>
                </div>

                <div className="row mx-3 mt-4">
                    <p className="h5">Practical traning by categories</p>
                    <div className="col-md-4"> 
                        <ul class="list-group rounded-0">

                            {firstData.map((category, index) => (
                                <li key={index} className="list-group-item">
                                <a href="./" className='text-decoration-none'>
                                    {category.name} ({category.count})
                                </a>
                                </li>
                            ))}
                        </ul> 
                    </div>
                    <div className="col-md-4"> 
                        <ul class="list-group rounded-0">

                        {secondData.map((category, index) => (
                                <li key={index} className="list-group-item">
                                <a href="./" className='text-decoration-none'>
                                    {category.name} ({category.count})
                                </a>
                                </li>
                            ))}
                            
                        </ul> 
                    </div>
                    <div className="col-md-4"> 
                        <ul class="list-group rounded-0">

                        {thirdData.map((category, index) => (
                                <li key={index} className="list-group-item">
                                <a href="./" className='text-decoration-none'>
                                    {category.name} ({category.count})
                                </a>
                                </li>
                            ))}
                            
                        </ul> 
                    </div>
                    
                </div>
            </div>
        </section>

        <section id="contact" className='bg-light mt-5 py-5'>
            <div className="container-md">
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
                        <img src="img/working.png" alt='first img' className='img-fluid h-100 shadow-sm' />
                    </div>
                </div>
            </div>
               
        </section>

        <section id='reviews' className='my-5'>
            <div className="container-fluid">
                    <p className="h4 text-center">PT Reviews</p>
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


                    </div>
            </div>
        </section>

        <section className='my-5 bg-light py-5'>
            <div className="row">
                <div className="col-md-4"> <img src="img/broad.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
                <div className="col-md-4"><img src="img/sender.png" alt='next to display' className='img-fluid h-100 shadow-sm' /> </div>
                <div className="col-md-4"> <img src="img/person.png" alt='next to display' className='img-fluid h-100 shadow-sm' /></div>
            </div>
        </section>
        <Footer/>
    </React.Fragment>
  );
};

export default Home;
