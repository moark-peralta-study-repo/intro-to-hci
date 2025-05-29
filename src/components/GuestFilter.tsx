import {UsersIcon} from 'lucide-react';

interface GuestFilterProps {
  value: number;
  onChange: (guests: number) => void;
}
const GuestFilter = ({
  value,
  onChange
}: GuestFilterProps) => {
  return <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm p-2 w-fit">
      <UsersIcon className="h-5 w-5 text-gray-500" />
      <select value={value} onChange={e => onChange(Number(e.target.value))} className="border-none bg-transparent focus:ring-0 text-gray-700 pr-8">
        <option value={0}>All Guests</option>
        <option value={2}>2+ Guests</option>
        <option value={4}>4+ Guests</option>
        <option value={6}>6+ Guests</option>
        <option value={8}>8+ Guests</option>
      </select>
    </div>;
};
export default GuestFilter;