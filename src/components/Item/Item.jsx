import ItemSt from "./ItemStyle"
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

function Item({ id, name, location, speaker, type, start }) {
    return (
        <ItemSt key={id}>
            <h2>{name}</h2>
            <p><FaLocationDot />           {location}</p>
            <p><IoPerson />          {speaker}</p>
            <p><FaCalendarAlt />        {type}</p>
            <p><IoMdTime />     {start}</p>
        </ItemSt>
    )
}

export default Item