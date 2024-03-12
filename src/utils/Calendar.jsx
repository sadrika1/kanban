import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

export default function Calendar({ selectedDate, setSelectedDate }) {
  let footer = <p>Выберите срок исполнения</p>;
  if (selectedDate) {
    footer = <p>Срок исполнения: {format(selectedDate, "PP", { locale: ru })}</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
  );
}
