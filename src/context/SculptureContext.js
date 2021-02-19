import { queryAllByDisplayValue } from '@testing-library/react';
import React, { createContext, useState } from 'react';
/* import getSculptures from '../api/getSculptures'; */
import artInstituteChicago from '../api/artInstituteChicago';
export const SculptureContext = createContext();

const SculptureContextProvider = (props) => {
	const [sculptures, setSculptures] = useState([]);
	const [sculptureListArtsy, setSculptureListArtsy] = useState([]);

	/* useEffect(() => { */
	const getListOfSculptures = async (query) => {
		try {
			/* const response = await getSculptures(query); */
			const response = await artInstituteChicago.get(
				`artworks/search?size=20&q=${query}[term][is_public_domain]=true&limit=2&fields=id,title,image_id,classification_titles,style_title,category_titles,date_start`
			);
			console.log(response);
			setSculptureListArtsy(response.data.data);
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
