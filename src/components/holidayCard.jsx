import React from 'react';
import moment from 'moment';

export default function HolidayCard() {

    return (

        <div className=' p-3' style={{ backgroundColor: '#08abf5', borderRadius: '30px', color:'white', lineHeight:'1em' }}>
            <div>
                <h6>
                     Holiday 
                </h6>
                <small className="lh-0">
                    Activity Every Muscle group to get the result you have always wanted
                </small>
                <div className='text-right'>
                    <date>{moment().format("Do MMMM YYYY")}</date>
                </div>
            </div>
        </div>


    );

}