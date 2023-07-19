import React from 'react'
import { RxAvatar, RxCross1 } from "react-icons/rx"
import '../Profile/Profile.css'
function Profile() {
    return (
        <>
            <div className="profile">
                <div className="profile_header">
                    <div className="profile_header-right">
                        < span>Profile</span>
                    </div>
                    <div className="profile_header-left">
                        <RxCross1 />
                    </div>
                </div>
                <div className="profile_body">
                    <div className="profile_body-avatar">
                        <RxAvatar />
                    </div>
                    <div className="profile_body-form">
                        <form action="">
                            <label for="fname" className='form-lable'>First name:</label>
                            <input type="text" id="fname" name="fname" value="John" /><br/>
                            <label for="lname" className='form-lable'>Last name:</label>
                            <input type="text" id="lname" name="lname" value="Doe" /><br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile