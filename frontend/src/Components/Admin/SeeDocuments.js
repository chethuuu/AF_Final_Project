import React, { useEffect, useState } from 'react'
//import { NavLink } from 'react-router-dom'
import axios from 'axios';
import image from '../../img/i2.jpg';

const SeeDocuments = () => {
    const [docs, getDocs] = useState('');

    //Get All Documents ==============================================================================
    useEffect(() => {
        getAllData();
   }, []);

    const getAllData = () => {
        axios.get("http://localhost:5000/api/upload/getAllDocs").then((res) => {
            const allDocs = res.data.Result;
            getDocs(allDocs);
            // console.log("ALL DOCS : "+allDocs[0].name);
        }).catch(err => console.log("Error : " + err));
    }

    console.log(docs.length);

    const displayT = (docs) => {
        if(docs.length > 0){
            return(
                docs.map((doc, index) => {
                    return(
                        <tr key={doc._id}>
                            <td>{doc.groupNo}</td>
                            <td>{doc.name}</td>
                            <td><button className='btn btn-outline-success'>Download</button></td>
                            <td><button className='btn btn-outline-danger' onClick={deleteDocument}>Delete</button></td>
                        </tr>
                    );
                })
            )    
        }
    }

    //Delete Document ==============================================================================
    const deleteDocument = () => {
        var groupId = '123321';
        try{
            axios.delete(`http://localhost:5000/api/upload/deleteDoc/${groupId}`);
            alert("Document Deleted...");
        }catch (err){
            console.log("ERROR IN DLETION : "+ err);
        }
    }

    return (
        <div>
            <section id="contact">
                <div className='container my-1 py-5'>
                    <div className='row mb-5'>
                        <div className='col-12'>
                            <h3 className='fs-5 text-center mb-0'>Document Submissions</h3>
                            <h1 className='display-6 text-center mb-4'> Download <b> Documents </b></h1>
                            <hr className='w-25 mx-auto' />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-md-6'>
                            <h3 className='mt-4'>Submitted Documents</h3>
                            <table className="table mt-3"  style={{backgroundColor: "#ADD8E6"}}>
                                <thead><tr>
                                    <th>Group ID</th>
                                    <th>File</th>
                                    <th>Download</th>
                                    <th>Delete</th>
                                </tr></thead>
                                <tbody>
                                    {displayT(docs)}
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

export default SeeDocuments;