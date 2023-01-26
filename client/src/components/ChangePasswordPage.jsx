import React from "react";

export default function ChangePasswordPage() {
	return (
        <div>
             <h1>Change Password</h1>
                <form action="/change-password" method="post"/>
                <label>Current Password:</label>
                <input type="password" id="current-password" name="current-password"/>
                <br/>
                <label for="new-password">New Password:</label>
                <input type="password" id="new-password" name="new-password"/>
                <br/>
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password"/>
                <br/>
                <input type="submit" value="Change Password"/>
                <form/>
       
        </div>
               
		
	); 
}

