import React from 'react';
import { Star } from 'lucide-react';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Signature Espresso',
      description: 'Rich, bold espresso shot made from our premium blend of Ethiopian and Colombian beans',
      price: '$4.50',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Caramel Macchiato',
      description: 'Smooth espresso layered with steamed milk, vanilla syrup, and topped with caramel drizzle',
      price: '$5.75',
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Artisan Cold Brew',
      description: 'Slow-steeped for 24 hours, served over ice with a hint of vanilla and cream',
      price: '$4.25',
      image: 'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Golden Turmeric Latte',
      description: 'Warming blend of turmeric, ginger, cinnamon with steamed oat milk and a touch of honey',
      price: '$5.25',
      image: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Featured 
            <span className="text-amber-600"> Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffees and specialty drinks, 
            each crafted to perfection by our expert baristas.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.9</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 hover:shadow-lg">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;