import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({addDetails}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=> {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);
    return (
        <div className="md:w-4/5 md:grid grid-cols-3 gap-5 ">
            {
             courses.map(course => <Course
             key={course.id}
             addDetails={addDetails}
            singleCourse={course}
             ></Course> )
            }
        </div>
    );
};


Courses.propTypes = {
    addDetails: PropTypes.func
}
export default Courses;