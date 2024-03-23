import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 50,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free weights area",
            "Cardio machines"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 70,
          "features": [
            "Access to gym equipment",
            "Group fitness classes",
            "Sauna access",
            "Personal locker"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 100,
          "features": [
            "Access to gym equipment",
            "Group fitness classes",
            "Personal training sessions",
            "Nutrition consultation",
            "Massage therapy",
            "Towel service"
          ]
        }
      ]
      
    return (
        <div className="mt-20">
            <h3 className="text-center text-5xl font-bold">Best Prices in the City</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                {
                    priceOptions.map(priceOption => <PriceOption 
                        option={priceOption}
                        key={priceOption.id}></PriceOption> )
                }
            </div>
        </div>
    );
};

export default PriceOptions;