import axios from 'axios';

const getGoogle = async () => {
	try {
		const response = await axios.get(
			`https://us-central1-sculpture-304310.cloudfunctions.net/sculptures-from-artsy`
		);
		if (response.status === 200) {
			console.log(response.data.results)
			return response.data.results
		}
	} catch (ex) {
		return { success: false, error: ex.message };
	}
};

export default getGoogle;
