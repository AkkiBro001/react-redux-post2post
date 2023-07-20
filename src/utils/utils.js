import { parseISO, formatDistanceToNow } from "date-fns/esm";

export function TimeAgo (timeStamp) {
    let time = "";
    if(timeStamp){
        const date = parseISO(timeStamp);
        const timePeriod = formatDistanceToNow(date);
        time = `${timePeriod} ago`
    }

    return time;
}

export function titleCase(str){
    return str[0].toUpperCase() + str.slice(1);
}