"use client";

import styles from "./Row.module.scss";

type RowProps = {
    name: string;
    active: boolean;
    index: number;
    setActiveRow: Function;
    setUserName: (name: string) => void;
};

const Row = ({ name, active, index, setActiveRow, setUserName }: RowProps) => {
    const handlerClick = () => {
        setActiveRow(index);
        setUserName(name);
    };

    return (
        <div onClick={handlerClick} className={styles.row}>
            <span data-status={active} className={styles.row_circle}></span>
            <div className={styles.row_name}>{name}</div>
        </div>
    );
};

export { Row };
