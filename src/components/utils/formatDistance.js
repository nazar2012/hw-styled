import { formatDistanceStrict } from "date-fns";

export const formatHoursDistance = (start, end) => {
    return formatDistanceStrict(Date.parse(start), Date.parse(end))
}