import Feature from "../Feature/Feature";
import PropTypes from 'prop-types';

const PriceOption = ({ option }) => {
    console.log(option);
    return (
        <div className="bg-lime-400 rounded-lg p-5 text-black text-center flex flex-col">
            <h4 className="text-xl"><span className="text-5xl font-bold">${option.price}</span>/mon</h4>
            <h3 className="text-3xl font-semibold mt-2">{option.name}</h3>
            <div className="mt-1  flex-grow">
                {
                    option.features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="bg-amber-500 py-2 w-full font-bold rounded-lg hover:bg-orange-500 mt-2">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}


export default PriceOption;