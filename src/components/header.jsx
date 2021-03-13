import React from 'react';
import moment from 'moment'

export default function Header() {

    return (
        <React.Fragment>
        <div className='d-flex flex-row'>
            <div className="flex-grow-1">
                <data>{moment().format("ddd")}, {moment().format("D MMMM")}</data>
            </div>
            <div className=''>
                <i class="fa fa-search" aria-hidden="true"></i>
                <input style={{ border: '0 none' }} placeholder='search'></input>
                <i class="fa fa-bell-o" aria-hidden="true"><sup className='badge rounded-pill bg-danger'>2</sup></i>
            </div>

        </div>
        <h2>Good Morning, Sir</h2>

        </React.Fragment>

    );

}