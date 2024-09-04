import React from "react";
import styles from "./Advantage.module.scss";

type AdvantageProps = {
	item: {
		title: string;
		subTitle: string;
		img: string;
		description: string;
	};
};

const Advantage = ({ item }: AdvantageProps) => {
	return (
		<div className={styles.block}>
			<div>
				<img src={item.img} alt={"icon"} />
			</div>
			<div className={styles.block_title}>
				{item.title}
				<br></br>
				<span className="blue">{item.subTitle}</span>
			</div>
			<p>{item.description}</p>
		</div>
	);
};

export { Advantage };
