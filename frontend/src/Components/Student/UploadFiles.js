import React, { useState } from 'react'
//import { NavLink } from 'react-router-dom'
import axios from 'axios';
import img from '../../img/i1.png';
import image from '../../img/i2.jpg';

const FileUpload = () => {
    const [file, setfile] = useState(null);

    const onFormSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('document', file);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
            "x-auth-token" : "123321",
          }, 
        };
    
        const url = 'http://localhost:5000/api/upload/addDoc';
        axios.post(url, formData, config).then((response) => {
          alert('File Uploaded Successfully');
        }).catch((err) => {
          console.log('err', err);
        })
      }
    
    const onInputChange = (e) => {
       setfile(e.target.files[0])
    }
    

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
                            <form method="post" onSubmit={onFormSubmit} encType="multipart/form-data">
                                <div className="mb-3">
                                    <label htmlFor="groupNo" className="form-label">Group Number</label>
                                    <input name="groupNo" type="text" className="form-control" id="groupNo" placeholder="Enter Your Group Number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="document" className="form-label">Upload your Document</label>
                                    <input name="document" className="form-control" id="file" rows="5" type='file' onChange={onInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">
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