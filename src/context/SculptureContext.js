import React, { createContext, useState } from 'react';

export const SculptureContext = createContext();

const SculptureContextProvider = (props) => {
	const [sculptures, setSculptures] = useState([]);
	console.log(sculptures);

	const addSculpture = (id, url, description) => {
		setSculptures([...sculptures, { id, url, description }]);
	};

	const removeSculpture = (id) => {
		setSculptures(sculptures.filter((sculpture) => sculpture.id !== id));
	};

	return (
		<SculptureContext.Provider value={{ sculptures, addSculpture, removeSculpture }}>
			{props.children}
		</SculptureContext.Provider>
	);
};

export default SculptureContextProvider;
