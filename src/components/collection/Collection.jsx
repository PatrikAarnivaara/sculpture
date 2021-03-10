import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import SculptureList from '../sculpture/SculptureList';

const Collection = () => {
	const { sculptures } = useContext(SculptureContext);
	console.log(sculptures)
	return (
		<div>
			<SculptureList items={sculptures} />
		</div>
	);
};

export default Collection;
