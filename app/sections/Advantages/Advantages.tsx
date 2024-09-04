import React from "react";
import styles from "./Advantages.module.scss";
import { Advantage } from "@/app/ui";
import icon1 from "@/public/img/Icon1.png";
import icon2 from "@/public/img/Icon2.png";
import icon3 from "@/public/img/Icon3.png";
import icon4 from "@/public/img/Icon4.png";

const advantages = [
	{
		title: "Unlimited",
		subTitle: "access to content",
		img: icon1.src,
		description:
			"Enjoy unlimited bandwidth to stay connected to the world's best shows, apps, and games!",
	},
	{
		title: "Flashing",
		subTitle: "connecting speed",
		img: icon2.src,
		description:
			"VPN Lumos offers unlimited bandwidth for faster loading and no buffering!",
	},
	{
		title: "Hide ",
		subTitle: "your location",
		img: icon3.src,
		description:
			"Get your own unique IP for added security and access to restricted sites, apps, and services!",
	},
	{
		title: "Bypass",
		subTitle: "blocked sites",
		img: icon4.src,
		description: "Access any website safely and anonymously!",
	},
];

const Advantages = () => {
	return (
		<section className={styles.advantage}>
			<div className={styles.advantage_field}>
				{advantages.map((el, index) => (
					<Advantage item={el} key={index} />
				))}
			</div>
		</section>
	);
};

export { Advantages };
