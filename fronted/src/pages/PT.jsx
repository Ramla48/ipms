
import React ,{useEffect, useState} from 'react'
import Navmenu from './Navmenu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import $, { error } from 'jquery';
import 'datatables.net-bs5';
import { postList } from '../services/PostService';


const PT = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    const table = $('#pt-table');
    if (!$.fn.DataTable.isDataTable(table)) {
      table.DataTable({
        columnDefs: [{
              targets: [-1],
              orderable: false
            }]
      });
    }

    fecthAllPost();
  }, []);

  const fecthAllPost = () =>{
    postList().then((response) => {
      setPosts(response.data);
    }).catch(error = () =>{
      console.error(error);
    })
  }

  return (
    <React.Fragment>
        <Navmenu/>
        <section className='bg-light'> 
            <div className="container-md py-3">

              <div className="card my-5 border-0 shadow-sm rounded-0 ">
                <div className="card-body">
                <table className='table table-bordered mb-0'>
                      <thead>
                        <tr>
                          <th className='text-center fw-normal'>Available PT location</th>
                        </tr>
                      </thead>
                    </table>
                    <table className='table table-bordered table-hover' id="pt-table">
                      <thead>
                        <tr>
                          <th className='fw-normal' width='90%'>Description</th>
                          <th className='fw-normal'>Post date</th>
                        </tr> 
                      </thead>

                      <tbody>
                      
                      {posts.map((job, index) => (
                        <tr key={index}>
                          <td>
                            <p>
                              <span className='fw-bold'>POSITION: </span>
                              <small>{job.position}</small>
                            </p>
                            <p>
                              <span>Description: </span>
                              <small>{job.description}</small>
                            </p>
                            <p>
                              <span>PT location: </span>
                              <small>{job.officeName}</small>
                            </p>
                          </td>
                          <td>
                            <p>{job.postDate}</p>
                            <p>
                                <Link to="/signup" className="nav-link text-primary">Login to apply</Link>
                            </p>
                          </td>
                        </tr>
                      ))}

                      </tbody>
                    </table>
                </div>
              </div>
                
            </div>

            
        </section>
        <Footer/>
    </React.Fragment>
  );
};

export default PT;
