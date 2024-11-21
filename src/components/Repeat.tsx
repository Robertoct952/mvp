import React from 'react';

interface RepeatProps {
    title: string;
    items: {
      icon: React.ReactNode;
      header: string;
      description: string;
    }[];
    backgroundImage: string;
  }
  
  const Repeat: React.FC<RepeatProps> = ({ title, items, backgroundImage }) => {
    return (
      <section
        className="p-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
        }}
      >
        <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.header}
                </h3>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Repeat;