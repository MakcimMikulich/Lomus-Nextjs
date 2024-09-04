import React from "react";
import styles from "./Achievement.module.scss";

type AchievementProps = {
	item: {
		number: number;
		description: string;
		img: string;
	};
};

const Achievement = ({ item }: AchievementProps) => {
	return (
		<div className={styles.achievement}>
			<div>
				<img src={item.img} alt={"ach"} />
			</div>
			<div className={styles.achievement_info}>
				<p className={styles.achievement_info_number}>{item.number}+</p>
				<p className={styles.achievement_info_note}>{item.description}</p>
			</div>
		</div>
	);
};

export { Achievement };
