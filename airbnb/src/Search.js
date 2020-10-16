import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
// above files come with react-date-range component
import { DateRangePicker } from "react-date-range";
import { Button } from '@material-ui/core';
import PeopleIcon  from '@material-ui/icons/People';
import { useHistory } from "react-router-dom";

// Date Picker component.  // run npm i date-fns if get error.
export default function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date()); // Date method gives todays date.
    const [endDate, setEndDate] = useState(new Date());

    // this componet require these lines, otherwise dont work.
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search"> 
            <DateRangePicker ranges={
                [selectionRange]} 
                onChange={handleSelect} />
                <h3>  Number of guests
                    <PeopleIcon />
                </h3>
                <input min={0} defaultValue={1} type="number" />
                <Button onClick={() => history.push('/search')}>Search Rooms</Button>
        </div>
    )
}
