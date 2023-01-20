import React from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import baseUrl from '@/utils/baseUrl';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
 
// import Footer from '../components/_App/Footer';

const MyProfile = () => {
    const userData = useSelector((state) => state.userData)
    // console.log("user Data",userData)
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="My Profile" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="My Profile" 
            />  

            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-profile">
                                {userData?.userInfo?.profilePhoto === null ?<img src="/images/success-people/success-people3.jpg" />: userData?.userInfo?.profilePhoto}
                                <h3>{userData?.userInfo?.name}</h3>
                                <p>{userData?.userInfo?.email}</p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="user-profile-table">
                                <div className="table-responsive">
                                    <table className="table table-bordered vertical-align-top">
                                        <tbody>
                                            <tr>
                                                <td>Role</td>
                                                <td>{userData?.userInfo?.role}</td>
                                            </tr>
                                            <tr>
                                                <td>Comapany</td>
                                                <td>{userData?.userInfo?.company === null ? "-": userData?.userInfo?.company}</td>
                                            </tr>
                                            <tr>
                                                <td>Email Confirmed</td>
                                                <td>{userData?.userInfo?.emailConfirmed === true ? "true": "false"}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>{userData?.userInfo?.gender === null ? "-" : userData?.userInfo?.gender}</td>
                                            </tr>
                                            <tr>
                                                <td>Enrolled Courses</td>
                                                <td>{userData?.userInfo?.enroled_courses?.length > 0 ? userData?.userInfo?.enroled_courses: "No courses enrolled"}</td>
                                            </tr>
                                            <tr>
                                                <td>Interests</td>
                                                <td>{userData?.userInfo?.interests?.length > 0 ? userData?.userInfo?.interests: "User has not picked any interests"}</td>
                                            </tr>
                                            <tr>
                                                <td>Location</td>
                                                <td>{userData?.userInfo?.location === null ? "-": userData?.userInfo?.location}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{userData?.userInfo?.phone === null ? "-": userData?.userInfo?.phone}</td>
                                            </tr>
                                            <tr>
                                                <td>Teacher Status</td>
                                                <td>{userData?.userInfo?.as_teacher_confirmed === null ? "-": userData?.userInfo?.as_teacher_confirmed}</td>
                                            </tr>    
                                        </tbody>
                                    </table> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default MyProfile;