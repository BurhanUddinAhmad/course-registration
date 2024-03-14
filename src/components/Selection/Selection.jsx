import PropTypes from 'prop-types';

const Selection = ({handleClick}) => {
   
    return (
        <div className="md:w-1/5 bg-white p-3 rounded-md">
            <h1 className="font-bold text-blue-500 border-b-[1px] pb-2">Credit Hour Remains <span> {handleClick.length} </span> hrs</h1>
            <h2 className="font-bold my-2">Course Name</h2>
            <ol>
                { handleClick.map(title => <li key={title.id}> {title.name} </li>) }
            </ol>
            <p className="border-y-[1px] py-2 my-2 text-gray-500">Total Credit Hour: { handleClick.reduce((p, c) => p + c.credit, 0) } </p>
            <p className="text-gray-500">Total Price: { handleClick.reduce((p, c) => p + c.price, 0 ) } USD</p>
        </div>
    );
};


Selection.propTypes = {
    handleClick: PropTypes.array
}
export default Selection;