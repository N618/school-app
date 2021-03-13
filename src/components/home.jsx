import React, { Component } from 'react';
import HolidayCard from './holidayCard'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



export default class Home extends Component {

    state = {
        date: new Date(),
        studentPresent: 980,
        totalStudent: 1200,
    }

    handleDateChange = (date) => {
        this.setState({ date })
    }

    render() {

        var studentAbsent = (this.state.totalStudent- this.state.studentPresent);
        var presentPersent = Math.ceil(this.state.studentPresent/ this.state.totalStudent*100);
        var persentAbsent = Math.ceil(studentAbsent/ this.state.totalStudent*100);
        return (
            <React.Fragment>
                <div className='row mt-3 mb-5'>
                    <div className="col-4"><HolidayCard /></div>
                    <div className="col-4"><HolidayCard /></div>
                    <div className="col-4"><HolidayCard /></div>
                </div>
                <div className="row mt-5">
                    <div className="col-7" style={{ background: '#FFFFFF', borderRadius: '20px' }}>
                        <div className='my-3'>
                            <h6>Attendence</h6>
                            <p>Overall Attendence</p>
                            <div style={{ width: 200, height: 200, margin:'0 auto' }}>
                                <CircularProgressbar 
                                    value={presentPersent}
                                    text={`Total Student Present`}
                                    strokeWidth= {10}
                                    styles={buildStyles({
                                        textColor: "grey",
                                        pathColor: "#11b826",
                                        trailColor: "#e6594e",
                                        textSize: '6px'
                                    })} />
                            </div>

                            <div class="d-flex">
                                <p className='ml-5'>Present(%) <br/><b>{presentPersent}</b></p>
                                <p className='ml-4'>Absent(%)<br/><b>{persentAbsent}</b></p>
                                <p className='ml-4'>Absent<br/><b>{studentAbsent}</b></p>
                            </div>

                        </div>
                    </div>
                    <div 
                    className="col-4 ml-5" 
                    style={{ background: '#FFFFFF', borderRadius: '20px',   border: '0 none'
                }} >
                        <Calendar
                            onChange={this.handleDateChange}
                            value={this.state.date} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}