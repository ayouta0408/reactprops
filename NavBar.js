import React, { Component } from 'react'; 



function Navbar () { 


    return( 
        <header>

            <div>
        <span style={{ fontSize: "24px", color: "red", fontWeight: "bold" }}>Hello</span> 
</div>

        <ul class="navmenu">
        <li><a href="#">Profession</a></li>
        <li><a href="#">Bio</a></li>
        <li><a href="#">Contact</a></li>  
        <li><a href="#">Location</a></li>
        </ul>
            <h4>Eya Laaribi</h4>
            
    </header>


        )
}

export default Navbar ; 