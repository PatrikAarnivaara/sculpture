import React, { createContext, useState, useEffect } from 'react';
import getSculptures from '../api/getSculptures';
export const SculptureContext = createContext();

const SculptureContextProvider = (props) => {
	const [sculptures, setSculptures] = useState([]);
	const [sculptureListArtsy, setSculptureListArtsy] = useState([]);

	useEffect(() => {
		const getListOfSculptures = async () => {
			try {
				const response = await getSculptures();
				setSculptureListArtsy(response);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
		};
		getListOfSculptures();
	}, []);

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
		<SculptureContext.Provider value={{ sculptures, sculptureListArtsy, addSculpture, removeSculpture }}>
			{props.children}
		</SculptureContext.Provider>
	);
};

export default SculptureContextProvider;
