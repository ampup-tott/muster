import React, { Component } from 'react';
import imgBanner1 from '../../assets/bannerHome1.jpg';

import './Middle.css';

class Middle extends Component {

    render() {
        return (<>
            <section>
                <div>
                    <div className="Banner" >
                        <img alt="img" src={imgBanner1} />
                    </div>

                    <div id="caption1">
                        <div className="caption1">
                            <div id="Adventages">
                                <ul>

                                    <li>

                                        <i className=" fas fa-tasks"></i>
                                        <p >Teacher can easily manager attendance with their student</p>

                                    </li>
                                    <li>

                                        <i className="fas fa-user-check"></i>
                                        <p>Students can easily attendance from their phones or computers</p>

                                    </li>
                                    <li>

                                        <i className="far fa-calendar-check"></i>
                                        <p>Teachers and students can view their teaching or learning schedule as a timetable</p>

                                    </li>
                                    <li>

                                        <i className="far fa-check-circle"></i>
                                        <p>teacher can easy for make a roll call with their student</p>

                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="caption2">
                    <div className="box-caption">
                        <p>
                            <i>When students improve their attendance rates,</i><br /> they improve their academic prospects and chances for graduating
                        </p>
                    </div>
                </div>

                <div className="caption3">
                    <div className="CapTion3">
                        <div className="attendanceImg">

                        </div>
                        <div className="Advantages2">
                            <h2>5 advantages of automatic student attendance system</h2>
                            <h4>With automatic class attendance system, teachers can more accurately and quickly track student’s time on the classroom. Here are the top ten advantages of implementing Time and Attendance Management solution:</h4>
                            <p><i className="fas fa-check"></i> Reduce paperwork and save time and money with mobile and cloud-based attendance management system</p>
                            <p><i className="fas fa-check"></i> Eliminate duplicate data entry and errors in time and attendance entries</p>
                            <p><i className="fas fa-check"></i> Improve visibility to track and manage student attendance and absenteeism across multiple campuses</p>
                            <p><i className="fas fa-check"></i> Real-time status tracking of leave requests</p>
                            <p><i className="fas fa-check"></i> Keep the parents informed about the student’s performance via Email and SMS alerts</p>
                            <br />
                            <button type="button">Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className="caption4">
                    
                </div>

            </section>
            </>
        );
        
    }
    
}





export default Middle;