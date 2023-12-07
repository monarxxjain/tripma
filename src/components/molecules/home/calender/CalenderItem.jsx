import { useEffect } from "react";
import generateDate from "./generateDate";
import specialDate from "./spisalDate";

export default function CalenderItem({ data = {}, select = [] }) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const dates = generateDate(data?.month, data?.year);

  useEffect(() => {
    const sl = document.querySelectorAll(".inselect");

    if (sl.length > 0) {
      sl[0].classList.add("frist");
      sl[sl.length - 1].classList.add("last");
    }
    console.log(select)
  }, [select.selectDate, data]);


  return (
    <div className="calender-item-wrp">
      <div className="calender-item-head">
        <strong> {dates[14].date.format("MMMM")}</strong>
        <span> {dates[14].date.year()}</span>
      </div>
      <div className="calender-item grid grid-cols-7 gap-8 mb-3">
        {days.map((d, i) => (
          <div key={i} className="">
            <p>{d}</p>
          </div>
        ))}
      </div>
        <div className="grid grid-cols-7 gap-8 gap-y-3">
          {dates.map(({ date, current, today, hide }, i) => (
            <div
              key={i}
              className={` date ${
                (select &&
                  date &&
                  select?.selectDate.includes(date.valueOf()) &&
                  "selected") ||
                date
              } ${
                current &&
                select.selectDate.length === 2 &&
                current &&
                select.selectDate[0].valueOf() <= date.valueOf() &&
                current &&
                select.selectDate[1].valueOf() >= date.valueOf() &&
                "inselect"
              }`}
            >
              <button
                onClick={
                  (current && (() => select.handler(date.valueOf()))) || null
                }
                className={`${(!current && "desable") || ""} ${
                  (today && "today border border-[#605DEC]") || ""
                } ${(hide && "hide text-grey-custom") || ""} ${
                  (select &&
                    date &&
                    select?.selectDate.includes(date.valueOf()) &&
                    "bg-purple-blue text-white py-1") ||
                  date
                } rounded-full px-2`}
              >
                {date.date()}
              </button>
            </div>
          ))}

        </div>
    </div>
  );
}
