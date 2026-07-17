import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideBar = () => {
    const childSuperRef = useRef(null);
    const childSettingRef = useRef(null);

    const navigator = useNavigate();

    const superHandler = () => {
        const childSuper = childSuperRef.current;
        const childSetting = childSettingRef.current;

        if (childSuper && childSuper.classList.contains('d-none')) {
            childSuper.classList.replace('d-none', 'd-block');

            if (childSetting && childSetting.classList.contains('d-block')) {
                childSetting.classList.replace('d-block', 'd-none');
            }
        } else if (childSuper) {
            childSuper.classList.replace('d-block', 'd-none');
        }
    };

    const settingHandler = () => {
        const childSetting = childSettingRef.current;
        const childSuper = childSuperRef.current;

        if (childSetting && childSetting.classList.contains('d-none')) {
            childSetting.classList.replace('d-none', 'd-block');

            if (childSuper && childSuper.classList.contains('d-block')) {
                childSuper.classList.replace('d-block', 'd-none');
            }
        } else if (childSetting) {
            childSetting.classList.replace('d-block', 'd-none');
        }
    };

    const logoutHandler =() => {
        localStorage.removeItem('user');
        localStorage.removeItem('role');

        navigator("/signup");
    }

    //  session code 

    const [role, setRole] = useState('');

    useEffect(() => {
        // Retrieve data from localStorage
        // const storedUsername = localStorage.getItem('user');
        const storedRole = localStorage.getItem('role');
    
        // Parse JSON if data exists
        if (storedRole) {
          setRole(JSON.parse(storedRole));
        }
      }, []);

    return (
        <React.Fragment>
            <aside>
                <div className="card border-0 shadow-sm rounded-0">
                    <div className="card-body h-fixed w-fixed">
                        <ul className='nav mt-4'>
                            <li className='list-none mb-2'>
                                <i className="bi bi-house-fill text-danger display-7"></i>
                                <Link to="/Home" className='text-none font-f text-black'> Dashbroad </Link>
                            </li>

                            {
                                role === "ADMIN" && (
                                    <>
                                         <li className='list-none mb-2'>
                                            <i className="bi bi-mortarboard-fill text-danger display-7"></i> 
                                            <Link to="/ManageStudent" className='text-none font-f text-black'> Manage students</Link>
                                        </li>

                                        <li className='list-none mb-2' onClick={superHandler}>
                                            <i className="bi bi-people-fill text-danger display-7"></i>
                                            <Link to="#" className='text-none font-f text-black mb-1'> Manage supervisors </Link>
                                            <ul className='ps-4 d-none' ref={childSuperRef}>
                                                <li className='list-none mb-1'>
                                                    <Link to="/AcademicSupervisor" className='text-none font-f text-black'>Supervisors</Link>
                                                </li>
                                                {/* <li className='list-none'>
                                                    <Link to="/IndustrialSupervisor" className='text-none font-f text-black'>Industrial supervisors</Link>
                                                </li> */}
                                            </ul>
                                        </li>

                                        <li className='list-none mb-2'>
                                            <i className="bi bi-card-text text-danger display-7"></i> 
                                            <Link to="/ManagePost" className='text-none font-f text-black'> Manage posts</Link>
                                        </li>

                                        
                                    </>
                                )
                            }    

                            {
                                role === "STUDENT" && (
                                    <>
                                         <li className='list-none mb-2'>
                                            <i className="bi bi-geo-alt text-danger  display-7"></i> 
                                            <Link to="/ptLocation" className='text-none font-f text-black'>PT locations</Link>
                                        </li>

                                        <li className='list-none mb-2'>
                                            <i className="bi bi-backpack4-fill text-danger  display-7"></i> 
                                            <Link to="/studentRequest" className='text-none font-f text-black'>Manage requests</Link>
                                        </li>

                                        {/* <li className='list-none mb-2'>
                                            <i className="bi bi-people-fill text-danger display-7"></i> 
                                            <Link to="/supervisorList" className='text-none font-f text-black'> Supervisor list</Link>
                                        </li> */}
                                    </>
                                )
                            }  

                            {
                               role === "STUDENT" &&(
            
                            <li className='list-none mb-2' onClick={settingHandler}>
                                <i className="bi bi-gear-fill text-danger  display-7"></i>
                                <Link to="#" className='text-none font-f text-black mb-1'> Settings <span className='text-white'>data center</span> </Link>
                                <ul className='ps-4 d-none' ref={childSettingRef}>
                                   <li className='list-none mb-1'>
                                      <Link to='/MyProfile' className='text-none font-f text-black'>My account</Link>
                                            </li>
                                  
                                    
                                    {/* <li className='list-none'>
                                        <Link to='/ChangePassword' className='text-none font-f text-black'>Change password</Link>
                                    </li> */}
                                </ul>
                            </li>

                              )
                         }

                        {
                               role === "SUPERVISOR" &&( 
                                
                               <>
                                    <li className='list-none mb-2'>
                                        <i className="bi bi-card-text text-danger display-7"></i> 
                                        <Link to="/ManagePosts" className='text-none font-f text-black'> Manage posts</Link>
                                    </li>

                                    <li className='list-none mb-2'>
                                        <i className="bi bi-card-text text-danger display-7"></i> 
                                        <Link to="/ManageRequest" className='text-none font-f text-black'> Manage requests</Link>
                                    </li>
                               </>

                             )
                        }

                            <li className='list-none'>
                                <i className="bi bi-box-arrow-in-right text-danger  display-7"></i> 
                                <span onClick={logoutHandler} className='ms-1 text-none font-f text-black' style={{cursor:"pointer"}}>Logout</span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    );
};

export default SideBar;


