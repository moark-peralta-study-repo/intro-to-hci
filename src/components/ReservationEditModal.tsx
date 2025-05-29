import { XIcon } from 'lucide-react';
import DateRangePicker from './DateRangePicker';
import LoadingSpinner from './LoadingSpinner';
import {useState} from "react";
interface ReservationEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  reservation: {
    id: number;
    property: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    status: string;
  };
  onSave: (id: number, updates: {
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => void;
}
const ReservationEditModal = ({
  isOpen,
  onClose,
  reservation,
  onSave
}: ReservationEditModalProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date(reservation.checkIn));
  const [endDate, setEndDate] = useState<Date>(new Date(reservation.checkOut));
  const [guests, setGuests] = useState(reservation.guests);
  const [isSaving, setIsSaving] = useState(false);
  if (!isOpen) return null;
  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    if (start) setStartDate(start);
    if (end) setEndDate(end);
  };
  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    onSave(reservation.id, {
      checkIn: startDate.toISOString().split('T')[0],
      checkOut: endDate.toISOString().split('T')[0],
      guests
    });
    setIsSaving(false);
    onClose();
  };
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Edit Reservation</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="mb-6">
          <h4 className="font-medium mb-2">{reservation.property}</h4>
          <div className="mb-4">
            <DateRangePicker startDate={startDate} endDate={endDate} onChange={handleDateChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Guests
            </label>
            <select id="guests" value={guests} onChange={e => setGuests(Number(e.target.value))} className="w-full border rounded-lg px-3 py-2">
              {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>
                  {num} {num === 1 ? 'guest' : 'guests'}
                </option>)}
            </select>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={handleSave} disabled={isSaving} className="flex-1 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors disabled:bg-rose-300 flex items-center justify-center gap-2">
            {isSaving ? <>
                <LoadingSpinner />
                Saving...
              </> : 'Save Changes'}
          </button>
          <button onClick={onClose} disabled={isSaving} className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50">
            Cancel
          </button>
        </div>
      </div>
    </div>;
};
export default ReservationEditModal;