import axios from 'axios';

const getSculptures = async (query) => {
	console.log(query)

	try {
		const response = await axios.get(
			'https://us-central1-sculpture-304310.cloudfunctions.net/sculptures-from-artsy',
		);
		if (response.status === 200) {
			return response.data.results;
		}
	} catch (ex) {
		return { success: false, error: ex.message };
	}
};

export default getSculptures;
