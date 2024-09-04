import styles from "./page.module.scss";

import { Header } from "./ui";
import { Advantages, Preview, Select } from "./sections";

export default function Home() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<Preview />
				<Advantages />
				<Select />
			</main>
		</>
	);
}
