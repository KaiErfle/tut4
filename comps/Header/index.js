import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, onMouseOver}) => <div
// style={{fontSize:fontSize, color:color, onMouseOver:onMouseOver }}
className="header">
    <h1 style={{fontSize:fontSize}}>{text}</h1>
</div>

function onMouseOver() {
    alert("mouse is over")    
}

Header.defaultProps = {
    fontSize:12,
    color:"#000",
    onMouseOver:onMouseOver,
    text:"Header"

}

export default Header