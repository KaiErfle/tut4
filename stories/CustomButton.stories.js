import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage'

export default {
    title: "My comps",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

function CancelClick(){
    alert("Cancel");
   }

export const MyCustomButtonWithOptions = () => <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}
    />;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input 
    placeholder="Custom placeholder"/>;

export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;

// export const PageWithCustomButtons = () => <div>
//     <Header 
//         fontSize={15}
//         color="#AAA"
//         onMouseOver={OKClick}
//     />
//     <Header 
//         fontSize={25}
//         color="#ABC"
//         onMouseOver={SubmitClick}
//     />
//     <Header 
//         fontSize={10}
//         color="#DAD"
//         onMouseOver={SubmitClick}
//     />
//     <CustomButton 
//     color="red"
//     text="Cancel"
//     onClick={CancelClick}/>
//     <CustomButton 
//     color="orange"
//     text="Ok"
//     onClick={OKClick}/>
//     <CustomButton 
//     color="green"
//     text="Submit"
//     onClick={SubmitClick}/>
//     <CustomButton 
//     color="blue"
//     text="Menu"
//     onClick={MenuClick}/>
// </div>

// function CancelClick(){
//     alert("Cancel");
// }

// function OKClick(){
//     alert("Ok");
// }

// function SubmitClick(){
//     alert("Submitted");
// }

// function MenuClick(){
//     alert("Menu");
// }