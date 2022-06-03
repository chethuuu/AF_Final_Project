import React, { useContext, useEffect, useRef, useState } from 'react';
import Conversation from './Conversation';
import Msg from './Msg';
import ChatOnline from './ChatOnline';
import './messenger.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Messenger(props) {
    const param = useParams();
    //const {uID} = this.props.match.params.uID;
    // const params = useParams<{ uID?: string}>();
    // const { id, groupId } = params;
    //console.log(props.match.param);

    const [conversations, setConversations] = useState([]);
    const [currChat, setCurrChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setnewMessage] = useState("");

    // const user = useContext(AuthServices);
    // console.log(user);
    const userId = '62923d33303e8934e81f2440';
    const url = 'http://localhost:5000/api/';
    const scrollRef = useRef();

    useEffect(() => {
        const getConversation = async () => {
            try{
                const res = await axios.get(`${url}conversations/`+ userId);
                console.log(res);
                setConversations(res.data);
            }catch(err){
                console.group(err);
            }
        }
        getConversation();
    }, [userId]);

    useEffect(() => {
        const getMesages = async () => {
            try{
                const res = await axios.get(`${url}Messages/`+currChat?._id);
                setMessages(res.data);
            }catch(err){
                console.log(err);
            }
        };
        getMesages();
    }, [currChat])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const messg = {
            sender:userId,
            text: newMessage,
            conversationId: currChat._id
        };

        try{
            const res = await axios.post(`${url}Messages/`, messg);
            setMessages([...messages, res.data])
            setnewMessage("")
        }catch(err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])

  return (
    <div className='messenger'>
        <div className='chatMenu'>
            <div className='chatMenuWrapper'>
                <input placeholder='Search for friends' className='chatInput' />
                {conversations.map((c) => (
                    <div onClick={() => setCurrChat(c)}>
                        <Conversation conversation={c} currentUserID={userId} />
                    </div>                        
                ))}
            </div>
        </div>
        <div className='chatBox'>
            <div className='chatBoxWrapper'>
                {
                    currChat ?
                    <>
                        <div className='chatBoxTop'>
                            {messages.map(m => (
                                <div ref={scrollRef}>
                                    <Msg message={m} own={m.sender === userId} />
                                </div>
                            ))}
                        </div>
                        <div className='chatBoxBottom'>
                            <textarea 
                                className='chatConvoInput' 
                                placeholder='write something...'
                                onChange={(e) => setnewMessage(e.target.value)}
                                value={newMessage}
                            ></textarea>
                            <button className='chatSubmitBtn' onClick={handleSubmit}>Send</button>
                        </div>
                    </>    
                    : <span className='noConvoText'>Open a conversation to start a chat</span>}
            </div>
        </div>
        <div className='chatOnline'>
            <div className='chatOnlineWrapper'>
                <ChatOnline />
                <ChatOnline />
                <ChatOnline />
                <ChatOnline />
            </div>
        </div>
    </div>
  )
}
