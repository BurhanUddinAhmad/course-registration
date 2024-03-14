import PropTypes from 'prop-types';
import { totalCredits } from '../../App';

const Selection = ({titles}) => {
   const creditHour = titles.reduce((p, c) => p + c.credit, 0);
    return (
        <div className="md:w-1/5 bg-white p-3 rounded-md">
            <h1 className="font-bold text-blue-500 border-b-[1px] pb-2">Credit-Hour Remain <span> {totalCredits - creditHour} </span> hrs</h1>
            <h2 className="font-bold my-2">Course Name</h2>
            <ol>
                { titles.map(title => <li key={title.id}> {title.name} </li>) }
            </ol>
            <p className="border-y-[1px] py-2 my-2 text-gray-500">
            Total Credit Hour: { creditHour } </p>
            
            <p className="text-gray-500">Total Price: { titles.reduce((p, c) => p + c.price, 0 ) } USD</p>
        </div>
    );
};


Selection.propTypes = {
    titles: PropTypes.array
}
export default Selection;