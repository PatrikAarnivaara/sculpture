import React, { createContext, useState } from 'react';
/* import getSculptures from '../api/getSculptures'; */
import unsplash from '../api/unsplash';
export const SculptureContext = createContext();

const SculptureContextProvider = (props) => {
	const [sculptures, setSculptures] = useState([]);
	const [sculptureListArtsy, setSculptureListArtsy] = useState([]);

	/* useEffect(() => { */
	const getListOfSculptures = async (query) => {
		try {
			/* const response = await getSculptures(query); */
			const response = await unsplash.get('/search/photos', {
				params: { query },
			});
			setSculptureListArtsy(response.data.results);
		} catch (error) {
			console.log(error);
		}
	};
	/* 	getListOfSculptures();
	}, []); */

	const addSculpture = (id, url, description) => {
		if (sculptures.some((sculpture) => sculpture.id === id)) {
			return;
		} else {
			setSculptures([...sculptures, { id, url, description }]);
		}
	};

	const removeSculpture = (id) => {
		setSculptures(sculptures.filter((sculpture) => sculpture.id !== id));
	};

	return (
		<SculptureContext.Provider
			value={{ sculptures, sculptureListArtsy, getListOfSculptures, addSculpture, removeSculpture }}
		>
			{props.children}
		</SculptureContext.Provider>
	);
};

export default SculptureContextProvider;
