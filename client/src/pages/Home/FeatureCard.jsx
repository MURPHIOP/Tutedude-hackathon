import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      {/* Icon */}
      <div className="text-5xl text-green-600 mb-4">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;