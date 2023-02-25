import { StyledClock } from "./styled";
import { useCurrenDate } from "./useCurrenDate";

export const Clock = () => {
    const {date, formatedData} = useCurrenDate();
    return (
        <StyledClock>
            Dzisiaj jest
            {" "}
            {formatedData(date)}
        </StyledClock>
    );
};
export default Clock;

