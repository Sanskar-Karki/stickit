import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </>
  );
}

export default App;
