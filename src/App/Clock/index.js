import { useEffect, useState } from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    <p className="clock">
        Dzisiaj jest {" "}
        {date.toLocalString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "logn"
        })}
    </p>

};