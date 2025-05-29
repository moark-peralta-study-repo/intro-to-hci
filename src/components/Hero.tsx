import {Link} from 'react-router-dom';

const Hero = () => {
  return <div className="relative w-full bg-gray-900 text-white">
    <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
    }}/>
    <div
      className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 lg:py-36">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Turn Your Property Into a Profitable Investment
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mb-10">
        Join thousands of successful hosts who are maximizing their rental
        income with our platform.
      </p>
      <Link to="/listings"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block">
        Explore Our Listings
      </Link>
    </div>
  </div>;
};
export default Hero;