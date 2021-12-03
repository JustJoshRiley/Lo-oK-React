import React from "react";
import {BsChevronBarDown} from 'react-icons/bs';
import './ScrollDownArrow.css';

function ScrollDownArrow() {
    return (
        <div className="Arrow-Container">
            <BsChevronBarDown className="Arrow" />
        </div>
    )
}

export default ScrollDownArrow;