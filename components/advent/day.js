import React from 'react';
import Active from "./states/active";
import Closed from "./states/closed";
import Expired from "./states/expired";

const Day = ({day}) => {
    if(!day.automaticallyActivate && day.isActive || day.automaticallyActivate && day.isActive) {
        return <Active day={day}/>
    } else if (day.isExpired) {
        return <Expired day={day}/>
    } else {
        return <Closed day={day}/>
    }
}

export default Day
