import React, { useEffect, useState}  from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import './StuGroup_Create.css'

export default function StuGroup_Create(){

    const {username} = useParams("");   
    const [GrpCount, setGrpCount] = useState("");

    const [user_id, setUser_id] = useState("");
    const [group_id, setGroup_id] = useState("");

    const [leader , setLeader] = useState({name:"", ID:"", contact:"", email:""});
    const [member1, setmember1] = useState({name:"", ID:"", contact:"", email:""});
    const [member2, setmember2] = useState({name:"", ID:"", contact:"", email:""});
    const [member3, setmember3] = useState({name:"", ID:"", contact:"", email:""});

    const resetForm = () => {
        setUser_id({ user_id: ""});
        setGroup_id({group_id: ""});
        setLeader({name:"", ID:"", contact:"", email:""});
        setmember1({name:"", ID:"", contact:"", email:""});
        setmember2({name:"", ID:"", contact:"", email:""});
        setmember3({name:"", ID:"", contact:"", email:""})
        
    }

    function sendData(e){
        e.preventDefault();
        const newGroup = {
            user_id, group_id, leader, member1, member2, member3
        }
        axios.post("http://localhost:5000/group/add", newGroup).then(() => {
            alert("Group created successfully");
            resetForm();
        }).catch((err) => {
            alert(err)
        });
    }

    //get Group Id
    useEffect(() => {
        const getGroupCollection = async() => {
            try {
                const res = await axios.get('http://localhost:5000/group/getCount')
                setGrpCount(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        getGroupCollection()
    },[]);


    //Collapsible button
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        }); 
    }

    


    return(
        <div>
            
            <div class="container shadow my-5 col-md-9 p-6 align-items-center">
                <div className=" d-flex flex-column align-items-center text-dark justify-content-center form formHeader" >   
                    <h3> Student Group Registration</h3>
                </div>
            
                    <form onSubmit={sendData} action="/post" method="post" encType="multipart/form-data">
                        <div className="form-check">
                            <label for="name">User ID :{username}</label>
                            <input type="text" className="form-control" id="name" 
                            onChange={(e) =>{
                                setUser_id(e.target.value);
                            }}></input> 
                        </div>
                        <div className="form-check">
                            <label for="name">Group ID : {GrpCount}</label>
                            <input type="text" className="form-control" id="name"                           
                            onChange={(e) =>{
                                setGroup_id(e.target.value);
                            }}></input> 
                        </div>

                        <div>
                            <button type="button" class="collapsible"><b>Add Group Leader details +</b></button>
                            <div class="content">
                                <div>
                                    <div className="form-check">    
                                        <label for="name">Student Name</label>
                                        <input type="text" className="form-control" id="name"  placeholder="Enter Name"
                                          value={leader.name}
                                          onChange={(e) =>{
                                            setLeader({...leader, name: e.target.value});
                                        }}></input>       
                                    </div>

                                    <div className="form-check">
                                        <label for="id">Student ID</label>
                                        <input type="text" className="form-control" id="id" placeholder="Student Id"
                                         value={leader.ID}
                                         onChange={(e) =>{
                                           setLeader({...leader, ID: e.target.value});
                                       }}></input>
                                    </div>

                                    <div className="form-check">
                                        <label for="email">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email "
                                        value={leader.email}
                                        onChange={(e) =>{
                                          setLeader({...leader, email: e.target.value});
                                      }}></input>
                                    </div>

                                    <div className="form-check">
                                        <label for="contact">Contact Number</label>
                                        <input type="text" className="form-control" id="contact" placeholder="Enter phone number "
                                         value={leader.contact}
                                         onChange={(e) =>{
                                           setLeader({...leader, contact: e.target.value});
                                       }}></input>
                                    </div>
                                </div>
                            </div>

                            <button type="button" class="collapsible"><b>Add Member 2 details +</b></button>
                            <div class="content">
                                <div>
                                    <div className="form-check">    
                                        <label for="name">Student Name</label>
                                        <input type="text" className="form-control" id="name"  placeholder="Enter Name"
                                         value={member1.name}
                                         onChange={(e) =>{
                                           setmember1({...member1, name: e.target.value});
                                       }}></input>       
                                    </div>

                                    <div className="form-check">
                                        <label for="id">Student ID</label>
                                        <input type="text" className="form-control" id="id" placeholder="Student Id"
                                         value={member1.ID}
                                         onChange={(e) =>{
                                           setmember1({...member1, ID: e.target.value});
                                       }}></input>
                                    </div>

                                    <div className="form-check">
                                        <label for="email">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email "
                                        value={member1.email}
                                        onChange={(e) =>{
                                          setmember1({...member1, email: e.target.value});
                                      }}></input>
                                    </div>

                                    <div className="form-check">
                                        <label for="contact">Contact Number</label>
                                        <input type="text" className="form-control" id="contact" placeholder="Enter phone number "
                                        value={member1.contact}
                                        onChange={(e) =>{
                                          setmember1({...member1, contact: e.target.value});
                                      }}></input>
                                    </div>
                                </div>
                            </div>

                            <button type="button" class="collapsible"><b>Add Member 3 details +</b></button>
                            <div class="content">
                                <div>
                                    <div className="form-check">    
                                        <label for="name">Student Name</label>
                                        <input type="text" className="form-control" id="name"  placeholder="Enter Name"
                                        value={member2.name}
                                        onChange={(e) =>{
                                          setmember2({...member2, name: e.target.value});
                                      }}></input>       
                                    </div>

                                    <div className="form-check">
                                        <label for="id">Student ID</label>
                                        <input type="text" className="form-control" id="id" placeholder="Student Id"
                                         value={member2.ID}
                                         onChange={(e) =>{
                                           setmember2({...member2, ID: e.target.value});
                                       }}></input>
                                    </div>

                                    <div className="form-check">
                                        <label for="email">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email "
                                         value={member2.email}
                                         onChange={(e) =>{
                                           setmember2({...member2, email: e.target.value});
                                       }}></input>
                                    </div>

                                    <div className="form-check">
                                        <label for="contact">Contact Number</label>
                                        <input type="text" className="form-control" id="contact" placeholder="Enter phone number "
                                        value={member2.contact}
                                        onChange={(e) =>{
                                          setmember2({...member2, contact: e.target.value});
                                      }}></input>
                                    </div>
                                </div>
                            </div>
                             
                            <button type="button" class="collapsible"><b>Add Member 4 details +</b></button>
                            <div class="content">
                            <div>
                                    <div className="form-check">    
                                        <label for="name">Student Name</label>
                                        <input type="text" className="form-control" id="name"  placeholder="Enter Name"
                                        value={member3.name}
                                        onChange={(e) =>{
                                          setmember3({...member3, name: e.target.value});
                                      }}></input>       
                                    </div>

                                    <div className="form-check">
                                        <label for="id">Student ID</label>
                                        <input type="text" className="form-control" id="id" placeholder="Student Id"
                                        value={member3.ID}
                                        onChange={(e) =>{
                                          setmember3({...member3, ID: e.target.value});
                                      }}></input>
                                    </div>

                                    <div className="form-check">
                                        <label for="email">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email "
                                        value={member3.email}
                                        onChange={(e) =>{
                                          setmember3({...member3, email: e.target.value});
                                      }}></input>
                                    </div>

                                    <div className="form-check">
                                        <label for="contact">Contact Number</label>
                                        <input type="text" className="form-control" id="contact" placeholder="Enter phone number "
                                        value={member3.contact}
                                        onChange={(e) =>{
                                          setmember3({...member3, contact: e.target.value});
                                      }}></input>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <br/>

                        <button type="submit" className="btn submitBtn">Submit</button>                  
                    </form>
           
            </div>
        </div>
    )

}