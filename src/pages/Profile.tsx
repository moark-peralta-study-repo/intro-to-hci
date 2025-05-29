import {useState} from 'react';
import {
  UserIcon,
  HomeIcon,
  CalendarIcon,
  SettingsIcon,
  PencilIcon
} from 'lucide-react';
import ReservationEditModal from '../components/ReservationEditModal';
import LoadingSpinner from '../components/LoadingSpinner';

interface Reservation {
  id: number;
  property: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  status: string;
}

const Profile = () => {
  // Mock reservation data
  const [reservations, setReservations] = useState<Reservation[]>([{
    id: 1,
    property: 'Modern Downtown Loft',
    checkIn: '2023-09-15',
    checkOut: '2023-09-20',
    guests: 2,
    status: 'Upcoming'
  }, {
    id: 2,
    property: 'Cozy Beachfront Cottage',
    checkIn: '2023-08-01',
    checkOut: '2023-08-05',
    guests: 4,
    status: 'Completed'
  }]);
  const [editingReservation, setEditingReservation] = useState<Reservation | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const handleEditReservation = (reservation: Reservation) => {
    setEditingReservation(reservation);
  };
  const handleSaveReservation = (id: number, updates: {
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => {
    setReservations(prevReservations => prevReservations.map(reservation => reservation.id === id ? {
      ...reservation,
      ...updates
    } : reservation));
  };
  const handleSaveProfile = async () => {
    setIsUpdating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsUpdating(false);
  };
  return <main className="w-full bg-gray-50 min-h-screen py-10">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gray-100 p-3 rounded-full">
            <UserIcon className="h-6 w-6 text-gray-600"/>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Guest Profile</h1>
            <p className="text-gray-600">
              Manage your account and reservations
            </p>
          </div>
        </div>
        {/* Account Settings Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <SettingsIcon className="h-5 w-5 text-gray-500"/>
            Account Settings
          </h2>
          <div className="grid gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Full Name</label>
              <input type="text" defaultValue="John Doe"
                     className="border rounded-lg px-3 py-2"/>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Email</label>
              <input type="email" defaultValue="john@example.com"
                     className="border rounded-lg px-3 py-2"/>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Phone</label>
              <input type="tel" defaultValue="+1 (555) 123-4567"
                     className="border rounded-lg px-3 py-2"/>
            </div>
            <button onClick={handleSaveProfile} disabled={isUpdating}
                    className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors w-full sm:w-auto disabled:bg-rose-300 flex items-center justify-center gap-2">
              {isUpdating ? <>
                <LoadingSpinner/>
                Saving...
              </> : 'Save Changes'}
            </button>
          </div>
        </div>
        {/* Reservations Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-gray-500"/>
            Your Reservations
          </h2>
          <div className="space-y-4">
            {reservations.map(reservation => <div key={reservation.id}
                                                  className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5 text-gray-500"/>
                  <h3 className="font-medium">{reservation.property}</h3>
                </div>
                <div className="flex items-center gap-2">
                  {reservation.status === 'Upcoming' &&
                  <button onClick={() => handleEditReservation(reservation)}
                          className="text-gray-500 hover:text-gray-700">
                      <PencilIcon className="h-4 w-4"/>
                  </button>}
                  <span
                    className={`text-sm px-2 py-1 rounded ${reservation.status === 'Upcoming' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        {reservation.status}
                      </span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>Check-in: {reservation.checkIn}</p>
                <p>Check-out: {reservation.checkOut}</p>
                <p>Guests: {reservation.guests}</p>
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
    {editingReservation && <ReservationEditModal isOpen={true}
                                                 onClose={() => setEditingReservation(null)}
                                                 reservation={editingReservation}
                                                 onSave={handleSaveReservation}/>}
  </main>;
};
export default Profile;