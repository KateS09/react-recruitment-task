import { useState } from "react/cjs/react.development";
import AccordionContent from "./AccordionContent/AccordionContent";
import styles from './Accordion.module.scss';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';


function Accordion({ name, applications }) {
    const [isOpenState, setIsOpenState] = useState(false);

    const toggle = () => setIsOpenState(!isOpenState);

    return (
        <section className={styles.accordion}>
            <button className={styles.item} onClick={toggle}>
                {name} Applications
                {isOpenState ? <AiOutlineMinusCircle className={styles.icon} /> : <AiOutlinePlusCircle className={styles.icon} />}
            </button>
            {
                isOpenState &&
                <AccordionContent applications={applications} />
            }
        </section>
    )
}

export default Accordion;
