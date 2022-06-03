import React, { useEffect, useState } from 'react'
//import { NavLink } from 'react-router-dom'
import axios from 'axios';
import image from '../../img/i2.jpg';

import FileDownload from 'js-file-download';

const SeeDocuments = () => {
    const [docs, getDocs] = useState('');
    var docName;

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
                    docName = doc.name;
                    return(
                        <tr key={doc._id}>
                            <td>{doc.groupNo}</td>
                            <td>{doc.name}</td>
                            <td><button className='btn btn-outline-success' onClick={(e) => download(e, doc.name)}>Download</button></td>
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

    function download(e, name){    
        e.preventDefault()
        axios({
            url: `http://localhost:5000/api/upload/downloadDoc/${docName}`,
            method: "GET",
            responseType: "blob"
        }).then((res) => {
            FileDownload(res.data, `${name}`);
        })
    }

    return (
        <div>
            <section id="contact">
                <div className='container shadow my-1 py-5'>
                    <div className='row mb-5'>
                        <div className='col-12'>
                        <h3 className=" fw-bolder mb-4"><center>Downloads Documents</center></h3>
                        </div>
                    </div>
                
                     
                            <table className="table" >
                                <thead className='table-dark'><tr>
                                    <th>Group ID</th>
                                    <th>Submitted Documents</th>
                                    <th>Download</th>
                                    <th>Delete</th>
                                </tr></thead>
                                <tbody class="table-group-divider">
                                    {displayT(docs)}
                                </tbody>
                            </table> 
                        </div>
                        
                    
               
            </section>
        </div>
    )
}

export default SeeDocuments;