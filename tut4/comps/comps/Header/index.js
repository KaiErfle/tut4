import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div
style={{fontSize:fontSize, color:color, onMouseOver:onMouseOver }}
className="header">
    <h1>Header</h1>
</div>

function onMouseOver() {
    alert("mouse is over")    
}

Header.defaultProps = {
    fontSize:12,
    color:"#000",
    onMouseOver:onMouseOver
}

export default Header