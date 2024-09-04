"use client";

import styles from "./Row.module.scss";

type RowProps = {
	rowInfo: {
		name: {
			title: string;
			first: string;
			last: string;
		};
	};
	active: boolean;
	index: number;
	setActiveRow: Function;
};

const Row = ({ rowInfo, active, index, setActiveRow }: RowProps) => {
	const { title, first, last } = rowInfo.name;

	const handlerClick = () => {
		setActiveRow(index);
	};

	return (
		<div onClick={handlerClick} className={styles.row}>
			<span data-status={active} className={styles.row_circle}></span>
			<div className={styles.row_name}>{`${title} ${first} ${last}`}</div>
		</div>
	);
};

export { Row };
