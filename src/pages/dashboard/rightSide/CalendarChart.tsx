import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarChart = () => {
  // Set the current date as the default value for the calendar
  const [value, setValue] = useState<Date | null>(new Date());

  // Define the handler to correctly match the expected type
  const handleDateChange = (
    value: Date | Date[] | null,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Ensure value is a Date before setting it
    if (value instanceof Date) {
      setValue(value);
    }
  };

  return (
    <div className="p-2 bg-white rounded-lg ">
      {/* React Calendar Component */}
      <Calendar
        // Updates the selected date when a user clicks a date on the calendar
        onChange={handleDateChange}
        // The current date value that is shown on the calendar
        value={value}
        // Adds a custom style to the calendar component
        className="border-none shadow-sm font-bold mx-8"
        // Apply specific styles to individual tiles (dates) based on the day of the week
        tileClassName={({ date, view }) => {
          if (view === "month") {
            // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
            const day = date.getDay();
            // Apply styles based on the day of the week
            if (day === 0) {
              // Sunday
              return "bg-red-500 text-white rounded-full";
            } else {
              // Monday to Saturday
              return "bg-black text-black rounded-full";
            }
          }
          return null;
        }}
      />
    </div>
  );
};

export default CalendarChart;
