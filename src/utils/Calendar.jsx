import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

export default function Calendar({ selectedDate, setSelectedDate }) {
  let footer = <p className="calendar_p">Выберите срок исполнения</p>;
  if (selectedDate) {
    footer = (
      <p className="calendar_p">
        Срок исполнения: {format(selectedDate, "PP", { locale: ru })}
      </p>
    );
  }

  const css = `
  .calendar_p {
    color: #94a6be;
    font-size: 10px;
    line-height: 3;
  }
  .my-selected:not([disabled]) { 
    font-weight: bold; 
  }
  .my-selected:hover:not([disabled]) { 
    color: #94A6BE;
  }
  .rdp-caption, .rdp-head_cell, .rdp-day {
    color: #94A6BE;
  }
  .my-today { 
    font-weight: bold;
  }

  .rdp {
    --rdp-cell-size: 30px;
    --rdp-caption-font-size: 18px;
    --rdp-accent-color: #94A6BE;
    --rdp-background-color: #e7edff;
    --rdp-accent-color-dark: #94A6BE;
    --rdp-background-color-dark: #20202C;
    --rdp-outline: 2px solid var(--rdp-accent-color);
    --rdp-outline-selected: 3px solid var(--rdp-accent-color);
    --rdp-selected-color: #ffffff;
  }

  .rdp-caption {
    font-size: 18px;
    font-family: Roboto;
  }

  .rdp-head_cell {
    font-size: 14px;
    text-transform: lowercase;
  }

  .rdp-cell, .rdp-day {
    font-size: 12px;
  }
`;

  return (
    <>
      <style>{css}</style>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        footer={footer}
        locale={ru}
        modifiersClassNames={{
          selected: "my-selected",
          today: "my-today",
        }}
      />
    </>
  );
}
