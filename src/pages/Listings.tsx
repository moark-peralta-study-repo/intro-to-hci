import React, { useState } from 'react';
import ListingCard from '../components/ListingCard';
import GuestFilter from '../components/GuestFilter';
const Listings = () => {
  const [guestFilter, setGuestFilter] = useState(0);
  // Mock data for listings
  const allListings = [{
    id: 1,
    title: 'Modern Downtown Loft',
    location: 'San Francisco, CA',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    price: 199,
    rating: 4.9,
    guests: 4,
    type: 'Entire apartment'
  }, {
    id: 2,
    title: 'Cozy Beachfront Cottage',
    location: 'Malibu, CA',
    imageUrl: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    price: 349,
    rating: 5.0,
    guests: 6,
    type: 'Entire house'
  }, {
    id: 3,
    title: 'Luxury Penthouse with City Views',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    price: 499,
    rating: 4.8,
    guests: 8,
    type: 'Entire apartment'
  }, {
    id: 4,
    title: 'Rustic Mountain Cabin',
    location: 'Aspen, CO',
    imageUrl: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    price: 249,
    rating: 4.7,
    guests: 5,
    type: 'Entire cabin'
  }, {
    id: 5,
    title: 'Charming Studio in Historic District',
    location: 'Charleston, SC',
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    price: 159,
    rating: 4.9,
    guests: 2,
    type: 'Entire apartment'
  }, {
    id: 6,
    title: 'Lakefront Retreat',
    location: 'Lake Tahoe, CA',
    imageUrl: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    price: 399,
    rating: 4.8,
    guests: 10,
    type: 'Entire house'
  }];
  const filteredListings = allListings.filter(listing => guestFilter === 0 || listing.guests >= guestFilter);
  return <main className="w-full bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Available Listings
            </h1>
            <p className="text-gray-600">
              Discover our curated selection of premium properties
            </p>
          </div>
          <GuestFilter value={guestFilter} onChange={setGuestFilter} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredListings.map(listing => <ListingCard key={listing.id} {...listing} />)}
        </div>
        {filteredListings.length === 0 && <div className="text-center py-10">
            <p className="text-gray-500">
              No properties found matching your criteria.
            </p>
          </div>}
      </div>
    </main>;
};
export default Listings;