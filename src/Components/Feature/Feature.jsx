import PropTypes from 'prop-types';
import { GiCheckMark } from "react-icons/gi";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2 text-lg'>
            <GiCheckMark />
            <p>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;