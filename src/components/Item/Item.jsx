import ItemSt from "./ItemStyle"
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { ImTicket } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { formatDate } from "../utils/formatDate"
import { formatHoursDistance } from "../utils/formatDistance";

function Item({ id, name, location, speaker, type, start, end }) {

    return (
        <ItemSt key={id}>
            <h2>{name}</h2>
            <p><FaLocationDot />           {location}</p>
            <p><IoPerson />          {speaker}</p>
            <p><ImTicket />        {type}</p>
            <p><FaCalendarAlt />     {formatDate(start)}</p>
            <p><IoMdTime />      {formatHoursDistance(start, end)}</p>
        </ItemSt>
    )
}

export default Item