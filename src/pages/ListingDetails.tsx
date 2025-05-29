import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPinIcon, HomeIcon, UsersIcon, BedIcon, BathIcon, WifiIcon, CarIcon, StarIcon } from 'lucide-react';
import DateRangePicker from '../components/DateRangePicker';
import ReservationForm from '../components/ReservationForm';
const ListingDetails = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const [isReserving, setIsReserving] = useState(false);
  // Mock listing data - in a real app, fetch this based on the ID
  const listing = {
    id: Number(id),
    title: 'Modern Downtown Loft',
    location: 'San Francisco, CA',
    description: 'Experience urban living at its finest in this stunning downtown loft. Features floor-to-ceiling windows, modern amenities, and breathtaking city views. Perfect for both business travelers and vacation stays.',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    price: 199,
    rating: 4.9,
    reviews: 128,
    maxGuests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    amenities: ['Wifi', 'Free parking', 'Kitchen', 'Washer', 'Dryer', 'Air conditioning'],
    type: 'Entire loft'
  };
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const handleReservation = async () => {
    setIsReserving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsReserving(false);
    navigate('/profile');
  };
  return <main className="w-full bg-white">
      <div className="h-[60vh] relative bg-gray-100">
        <img src={listing.imageUrl} alt={listing.title} className="w-full h-full object-cover" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <span>{listing.rating}</span>
                  <span className="text-gray-400">
                    ({listing.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{listing.location}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <HomeIcon className="h-5 w-5 text-gray-500" />
                <span>{listing.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-gray-500" />
                <span>Up to {listing.maxGuests} guests</span>
              </div>
              <div className="flex items-center gap-2">
                <BedIcon className="h-5 w-5 text-gray-500" />
                <span>{listing.bedrooms} bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <BathIcon className="h-5 w-5 text-gray-500" />
                <span>{listing.baths} bathrooms</span>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">About this place</h2>
              <p className="text-gray-600 leading-relaxed">
                {listing.description}
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity, index) => <div key={index} className="flex items-center gap-2">
                    {amenity === 'Wifi' ? <WifiIcon className="h-5 w-5 text-gray-500" /> : amenity === 'Free parking' ? <CarIcon className="h-5 w-5 text-gray-500" /> : <HomeIcon className="h-5 w-5 text-gray-500" />}
                    <span>{amenity}</span>
                  </div>)}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Select dates</h2>
              <DateRangePicker startDate={startDate} endDate={endDate} onChange={handleDateChange} />
            </div>
          </div>
          <div>
            <ReservationForm price={listing.price} startDate={startDate} endDate={endDate} guests={guests} maxGuests={listing.maxGuests} onGuestsChange={setGuests} onSubmit={handleReservation} isLoading={isReserving} />
          </div>
        </div>
      </div>
    </main>;
};
export default ListingDetails;