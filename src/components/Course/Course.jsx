import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Course = ({singleCourse, addDetails}) => {

    const {name, description, photo, price, credit} = singleCourse;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl p-2 mb-2 md:mb-0">
                <figure><img src={photo} alt="Photo" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> { name } </h2>
                    <p className='text-gray-500'> {description} </p>
                    <div className='flex justify-between items-center w-full my-2'>
                        <p className='flex items-center gap-2'> <FiDollarSign /> Price: {price} </p>
                        <p className='flex items-center gap-2'> <IoBookOutline /> Credit: {credit} hr</p>
                    </div>
                    <div className="card-actions">
                        <button 
                        onClick={() => addDetails(singleCourse)}
                        className="btn btn-sm w-full hover:bg-blue-600 btn-primary">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    singleCourse: PropTypes.object,
    addDetails: PropTypes.func,
}

export default Course;