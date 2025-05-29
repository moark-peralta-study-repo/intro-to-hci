import {Link} from 'react-router-dom';
import {ArrowRightIcon} from 'lucide-react';
import Hero from '../components/Hero';

const Home = () => {
  return <main className="w-full">
    <Hero/>
    <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Why Book with Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            Clean and Well-Maintained Properties
          </h3>
          <p className="text-gray-600">
            We ensure all listings are thoroughly cleaned and maintained to
            provide a comfortable stay for our guests.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Friendly Staff</h3>
          <p className="text-gray-600">
            Our team is dedicated to providing exceptional service, ensuring
            your needs are met promptly and professionally.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
          <p className="text-gray-600">
            Our dedicated support team is available around the clock to help
            with any issues that arise.
          </p>
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link to="/listings"
              className="inline-flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors">
          View All Listings
          <ArrowRightIcon className="h-5 w-5"/>
        </Link>
      </div>
    </section>
    <section className="py-16 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Trusted by Travellers Worldwide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 italic mb-4">
              "I had an amazing stay! The property was exactly as described and
              the host was incredibly helpful. Highly recommend!"
            </p>
            <p className="font-medium">- Sarah Johnson</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 italic mb-4">
              "Booking was a breeze, and the place was spotless. I felt right at
              home. Will definitely book again!"
            </p>
            <p className="font-medium">- Michael Chen</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 italic mb-4">
              "Fantastic experience! The location was perfect and the amenities
              were top-notch. Couldn't have asked for more."
            </p>
            <p className="font-medium">- Emma Rodriguez</p>
          </div>
        </div>
      </div>
    </section>
  </main>;
};
export default Home;