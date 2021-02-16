import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SculptureContext = createContext();

const SculptureContextProvider = (props) => {
	const [sculptures, setSculptures] = useState([
		{
			url:
				'https://images.unsplash.com/photo-1548811579-017cf2a4268b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMzQzODN8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=400',
			description: 'concrete man statue',
		},
	]);

	const addSculpture = (url, description) => {
		setSculptures([...sculptures, { url, description, id: uuidv4() }]);
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
