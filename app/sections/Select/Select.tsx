"use client";

import React, { useEffect, useState } from "react";
import styles from "./Select.module.scss";
import { Row } from "@/app/components";
import { fetchNames } from "@/app/libs/fetchNames";

const Select = () => {
	const [names, setNames] = useState([]);
	const [loading, setLoading] = useState(true);
	const [activeRow, setActiveRow] = useState(0);

	useEffect(() => {
		const loadData = async () => {
			try {
				const { results } = await fetchNames();

				setNames(results);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, []);

	return (
		<section className={styles.select}>
			<h2 className={styles.select_title}>Millions of people trust us!</h2>
			<div className={styles.select_content}>
				<div id="target" className={styles.select_content_note}>
					Choose <span className="blue">your NAme</span>
				</div>
				<div className={styles.select_content_field}>
					{loading ? (
						<span>Loading ...</span>
					) : (
						names.map((name, i) => (
							<Row
								rowInfo={name}
								active={activeRow === i}
								index={i}
								setActiveRow={setActiveRow}
								key={i}
							/>
						))
					)}
				</div>
				<button className={styles.select_content_btn}>Get VPN</button>
			</div>
		</section>
	);
};

export { Select };
