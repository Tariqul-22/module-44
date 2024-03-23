import PropTypes from 'prop-types';

const Link = ({ route }) => {
    const { id, path, name } = route
    console.log(route);
    return (
        <li className='mr-10 hover:text-orange-300'><a href={path}>{name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;