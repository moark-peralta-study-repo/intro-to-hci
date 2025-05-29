import {StarIcon, MapPinIcon, UsersIcon} from 'lucide-react';
import {Link} from 'react-router-dom';

interface ListingCardProps {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
  price: number;
  rating: number;
  guests: number;
  type: string;
}

const ListingCard = ({
                       id,
                       title,
                       location,
                       imageUrl,
                       price,
                       rating,
                       guests,
                       type
                     }: ListingCardProps) => {
  return <div
    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
    <div className="h-48 w-full bg-cover bg-center" style={{
      backgroundImage: `url('${imageUrl}')`
    }}/>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center">
          <StarIcon className="h-4 w-4 text-yellow-500 mr-1 inline"/>
          <span className="text-sm">{rating}</span>
        </div>
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-3">
        <MapPinIcon className="h-4 w-4 mr-1"/>
        <span>{location}</span>
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <UsersIcon className="h-4 w-4 mr-1"/>
        <span>
            {guests} guests • {type}
          </span>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">
          ${price} <span className="text-gray-500 font-normal">night</span>
        </p>
        <Link to={`/listings/${id}`}
              className="text-sm text-rose-500 font-medium hover:text-rose-600">
          View Details
        </Link>
      </div>
    </div>
  </div>;
};
export default ListingCard;