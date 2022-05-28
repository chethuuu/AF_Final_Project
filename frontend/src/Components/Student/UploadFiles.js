import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../img/i1.png';
import image from '../../img/i2.jpg';

const FileUpload = () => {
    return (
        <div>
            <section id="contact">
                <div className='container my-5 py-5'>
                    <div className='row mb-5'>
                        <div className='col-12'>
                            <h3 className='fs-5 text-center mb-0'>File Upload</h3>
                            <h1 className='display-6 text-center mb-4'> Upload your <b> Reaserch </b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-md-5'>
                            <img src={img} alt="File Upload" width='300' />
                        </div>
                        <div className='col-md-5'>
                            <form method="post" enctype="multipart/form-data">
                                <div class="mb-3">
                                    <label for="groupNo" class="form-label">Group Number</label>
                                    <input name="groupNo" type="text" class="form-control" id="groupNo" placeholder="Enter Your Group Number" />
                                </div>
                                <div class="mb-3">
                                    <label for="file" class="form-label">Upload your Document</label>
                                    <input name="file" class="form-control" id="file" rows="5" type='file' />
                                </div>
                                <button type="submit" class="btn btn-primary">
                                    Upload Documents
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-md-6'>
                            <h3 className='mt-4'>Document Uploaded</h3>
                            <table className="table mt-3"  style={{backgroundColor: "#ADD8E6"}}>
                                <thead>
                                    <th>File</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </thead>
                                <tbody>
                                    <td>gfjhagjhgaje.pdf</td>
                                    <td><button className='btn btn-outline-success'>Update</button></td>
                                    <td><button className='btn btn-outline-danger'>Delete</button></td>
                                </tbody>
                            </table>
                        </div>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-md-4'>
                            <img src={image} alt="File Upload" width='300' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FileUpload;