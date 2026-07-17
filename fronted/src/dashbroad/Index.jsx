import React from 'react'
import SideBar from './SideBar'
import { TopHeader } from './TopHeader'

export const Index = () => {
  return (
    <React.Fragment>
        <div className="bg-light h-fixed-md">
            <TopHeader/>
            <div className='d-flex'>
            <SideBar/>
                <div className='container-fluid mt-5'>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9"> 
                            <div className="card border-0 shadow-sm rounded-2 bg-warning-2">
                              <div className="card-body h-fixed-xs">

                                  {/* This is inside of card body  */}
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9"> 
                            <div className="card border-0 shadow-sm rounded-2 bg-primary">
                              <div className="card-body h-fixed-xs">
                                  {/* This is inside of card body  */}
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>

                     <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9"> 
                            <div className="card border-0 shadow-sm rounded-2 bg-danger">
                              <div className="card-body h-fixed-xs">
                                  {/* This is inside of card body  */}
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>

                     <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9"> 
                            <div className="card border-0 shadow-sm rounded-2 bg-info">
                              <div className="card-body h-fixed-xs">
                                  {/* This is inside of card body  */}
                              </div>
                            </div>
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
