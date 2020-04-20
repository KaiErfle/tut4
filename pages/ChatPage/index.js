import React, {useState, useEffect} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/input'


// var welcome_state = "welcome to my App!"
// function ChangeWelcome(){
//     welcome_state = "Start with sending a message"
//     document.querySelector("#welcome").innerText = welcome_state
// }

const ChatPage = ({}) => {
    const[welcome, setWelcome] = useState("Welcome to my App!");
    const[msg, setMsg] = useState("pls type something");
    const[resp, setResp] = useState("let me respond to you");
    const[color, setColor] = useState("#DAD")
   
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#chatpage").style.left = 0;
        }, 50)
       }, []);

    return <div id="chatpage">
        <div id="welcome">
            <Header fontSize={32} text={welcome}></Header>
        </div>
        <div id="chats" onClick={()=> {
            setWelcome("Start with sending a message.");
        }}>
            <Chat name="User 1" msg={msg}/>
            <p />
            <Chat img={"https://image.flaticon.com/icons/png/512/65/65508.png"} name="Chat Bot" backgroundColor={"#FAB"} msg={resp}/>
        </div>
        <div id="controls">
            <Input onClick={(val) => {
                setMsg(val);
                var new_resp = CheckResponse(val);
                setResp(new_resp);
                
                // if(val === "hi"){
                //     setResp("I love pie");
                // }
            }}/>
        </div>
    </div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie";
        case "how are you?":
            return "great!";
        default:
            return "I don't understand what you are trying to say"
    }

}

ChatPage.defaultProps = {

}

export default ChatPage