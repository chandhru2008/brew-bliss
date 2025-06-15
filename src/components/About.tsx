import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://www.shutterstock.com/image-photo/barista-expertly-pours-milk-into-600nw-2585124627.jpg"
                alt="Barista crafting coffee"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
           
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">5+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story of 
                <span className="text-amber-600"> Passion</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Born from a simple dream to serve the perfect cup of coffee, Brew Bliss has evolved 
                into a sanctuary where coffee lovers gather to experience exceptional brews and warm hospitality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every bean is carefully selected from sustainable farms around the world, roasted to perfection, 
                and crafted by our skilled baristas who are passionate about the art of coffee making.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Made with Love</h3>
                <p className="text-sm text-gray-600">Every cup is crafted with passion and care</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-sm text-gray-600">Only the finest beans make it to your cup</p>
              </div>
              
              <div className="text-center group">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Community First</h3>
                <p className="text-sm text-gray-600">Building connections one cup at a time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;