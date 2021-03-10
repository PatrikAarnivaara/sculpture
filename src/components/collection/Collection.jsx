import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import SculptureList from '../sculpture/SculptureList';
import trashIcon from '../../assets/trash.svg';

const Collection = () => {
	const { sculptures } = useContext(SculptureContext);
	return (
		<div>
			<SculptureList items={sculptures} iconUnClicked={trashIcon} image="image_id" date="date_start" />
		</div>
	);
};

export default Collection;
