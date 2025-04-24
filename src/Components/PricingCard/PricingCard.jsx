import React from 'react';
import PricingFeatures from './PricingFeatures';
const PricingCard = ({pricing}) => {

console.log(pricing);
const{name, price, information, features} = pricing;

    return (
        <div className='flex flex-col border bg-amber-100 rounded-2xl p-4'>
            <div>
                {
                    // card header sections.
                }
                <h1 className='text-5xl'>{name}</h1>
                <h3 className='text-2xl'>${price}</h3>
            </div>
            {/* {card body} */}
            <div className='bg-amber-500 p-4 rounded-2xl flex-1'>
                <p>{information}</p>
                {
                    features.map((feature, index) => <PricingFeatures
                    key={index}
                     feature={feature}></PricingFeatures>)
                }
            </div>
            <button className="btn w-full mt-7">Subscribe</button>
        </div>
    );
};

export default PricingCard;