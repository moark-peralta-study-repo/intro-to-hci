import { UsersIcon, StarIcon } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
interface ReservationFormProps {
  price: number;
  startDate: Date | null;
  endDate: Date | null;
  guests: number;
  maxGuests: number;
  onGuestsChange: (guests: number) => void;
  onSubmit: () => Promise<void>;
  isLoading: boolean;
}
const ReservationForm = ({
  price,
  startDate,
  endDate,
  guests,
  maxGuests,
  onGuestsChange,
  onSubmit,
  isLoading
}: ReservationFormProps) => {
  const nights = startDate && endDate ? Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const subtotal = price * nights;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + serviceFee;
  return <div className="bg-white p-6 rounded-lg shadow-lg sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-gray-500"> night</span>
        </div>
        <div className="flex items-center">
          <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
          <span className="text-sm font-medium">4.9</span>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <UsersIcon className="h-5 w-5 text-gray-500" />
          <label htmlFor="guests" className="font-medium">
            Guests
          </label>
        </div>
        <select id="guests" value={guests} onChange={e => onGuestsChange(Number(e.target.value))} className="w-full border rounded-lg px-3 py-2">
          {Array.from({
          length: maxGuests
        }, (_, i) => i + 1).map(num => <option key={num} value={num}>
              {num} {num === 1 ? 'guest' : 'guests'}
            </option>)}
        </select>
      </div>
      {nights > 0 && <div className="border-t pt-4 mb-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">
                ${price} × {nights} nights
              </span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service fee</span>
              <span>${serviceFee}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>}
      <button onClick={onSubmit} disabled={!startDate || !endDate || isLoading} className="w-full bg-rose-500 text-white py-3 rounded-lg font-medium hover:bg-rose-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {isLoading ? <>
            <LoadingSpinner />
            Reserving...
          </> : 'Reserve'}
      </button>
    </div>;
};
export default ReservationForm;