const API_URL = "https://randomuser.me/api/?results=5&inc=name";

export const fetchNames = async () => {
	try {
		const response = await fetch(API_URL);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return await response.json();
	} catch (error) {
		throw error;
	}
};
