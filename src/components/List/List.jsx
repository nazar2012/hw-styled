import events from "../../upcoming-events.json"
import Item from "../Item/Item"
import ListSt from "./ListStyle"

function List() {
    return (
        <>
            <ListSt>
                {events.map(({ id, name, location, speaker, type, start }) => {
                    return (
                        <Item key={id} name={name} location={location} speaker={speaker} type={type} start={start}/>
                    )
                })}
            </ListSt>
        </>
    )
}

export default List