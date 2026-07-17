import React, { useState } from 'react'
import { TopHeader } from './TopHeader'
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom';

export const ManagePosts = () => {
    const [posts, setPosts] = useState([]);

    const navigator = useNavigate();

    const updatePost =(id) =>{
        navigator(`/editPosts/${id}`);
      }

      const removePost = (id) =>{
        // deletePost(id).then(() => {
        //   fecthAllPost();
        // }).catch(error => console.error(error))
        console.log("delete your code here ");
      }

  return (
    <>
    <div className="bg-light h-fixed-md">
       <TopHeader/>
       <div className='d-flex'>
        <SideBar/>

         <div className='container-fluid mt-5'>
                    <div className="card border-0 shadow-sm rounded-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-10">
                            <p className="h4 font-f">Manage post </p>
                          </div>
                          <div className="col-md-2">
                              <button className='btn btn-primary'
                                 onClick={() => navigator("/registerPosts")} >
                                  Add post
                                </button>
                          </div>
                        </div>
                        
                        <table className='table table-hover table-bordered mt-1' id="post-table">

                          <thead>
                            <tr>
                              <th width='1%'>S/N</th>
                              <th >Position</th>
                              <th width='2%'>Amount</th>
                              <th width='50%'>Description</th>
                              <th>Office name</th>
                              <th>Date</th>
                              <th width='8%'>Edit</th>
                              <th width='8%'>Delete</th>
                            </tr>
                          </thead>

                          <tbody>


                            {posts.map((post, index) => (
                              <tr key={index}>
                                      <td className='text-center'>{index + 1}</td>
                                        <td> {post.position}</td>
                                        <td>{post.amount}</td>
                                        <td>{post.description}</td>
                                        <td>{post.officeName}</td>
                                        <td>{post.postDate}</td>
                                        <td className='text-center'>
                                          <button className='btn btn-success' onClick={() => updatePost(post.id)}>Edit</button>

                                        </td>
                                        <td className='text-center'>
                                          <button className='btn btn-danger' onClick={() => removePost(post.id)}>Delete</button>
                                        </td>
                              </tr>
                            ))}

                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>

       </div>
    </div>
    </>
  )
}
