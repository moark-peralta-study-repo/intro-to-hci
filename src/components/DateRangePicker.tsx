import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {CalendarIcon} from 'lucide-react';

interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}
const DateRangePicker = ({
  startDate,
  endDate,
  onChange
}: DateRangePickerProps) => {
  return <div className="relative">
      <div className="flex items-center gap-2 mb-2">
        <CalendarIcon className="h-5 w-5 text-gray-500" />
        <span className="font-medium">Select Dates</span>
      </div>
      <ReactDatePicker selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange inline minDate={new Date()} monthsShown={2} className="w-full" />
    </div>;
};
export default DateRangePicker;