// src/pages/Home/FeaturesSection.jsx

import React from 'react';
import FeatureCard from '../../components/cards/FeatureCard.jsx'; // Corrected: Path from src/pages/Home/ to src/components/cards/

const FeaturesSection = () => {
  const features = [
    {
      icon: '👥',
      title: 'Group Ordering',
      description: 'Join with nearby vendors to place bulk orders and get better prices. Our AI matches you with compatible vendors automatically.',
    },
    {
      icon: '✅',
      title: 'Verified Suppliers',
      description: 'All suppliers are thoroughly vetted for quality, reliability, and fair pricing. Read reviews from other vendors before ordering.',
    },
    {
      icon: '📈',
      title: 'Price Tracking',
      description: 'Monitor market prices in real-time and get alerts when prices drop. Make informed purchasing decisions with data insights.',
    },
    {
      icon: '🚚',
      title: 'Reliable Delivery',
      description: 'Get your orders delivered on time with our network of trusted delivery partners. Track your orders in real-time.',
    },
    {
      icon: '💳',
      title: 'Flexible Payment',
      description: 'Pay how you want - instant payment, buy now pay later, or credit terms with trusted suppliers. Build your credit score.',
    },
    {
      icon: '🤖',
      title: 'AI Assistant',
      description: 'Get help in Hindi or your local language. Our AI assistant helps you navigate, compare prices, and make smart decisions.',
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Why Choose BazaarLink?
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We're revolutionizing how street vendors source their raw materials with smart technology and verified suppliers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;