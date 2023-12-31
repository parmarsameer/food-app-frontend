import React from 'react'

function Home() {
  return (
    <div className='p-3 bg-light'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-around align-items-center 
                     p-4 bg-white boarder border-secondary shadow-sm'>
                        <i class="fa-solid fa-indian-rupee-sign fs-1 text-success"></i>
                        <div>
                            <span>Earn</span>
                            <h2>2500</h2>
                        </div>
                    </div>
                </div>
                
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-around align-items-center 
                     p-4 bg-white boarder border-secondary shadow-sm'>
                        <i className='fa-solid fa-person-biking fs-1 text-primary'></i>
                        <div>
                            <span>Delivery</span>
                            <h2>15</h2>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-around align-items-center 
                     p-4 bg-white boarder border-secondary shadow-sm'>
                        <i className='fa-solid fa-mobile-screen-button fs-1 text-danger'></i>
                        <div>
                            <span>Requests</span>
                            <h2>20</h2>
                        </div>
                    </div>
                </div>                

                <div className='col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light'>
                    <div className='d-flex justify-content-around align-items-center 
                     p-4 bg-white boarder border-secondary shadow-sm'>
                        <i className='fa-solid fa-chart-line fs-1 text-warning'></i>
                        <div>
                            <span>Increase</span>
                            <h2>20%</h2>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home