import React, { useContext } from 'react';
import SculptureList from '../sculpture/SculptureList';
import { SculptureContext } from '../../context/SculptureContext';
import './Sculpture.css';

const Sculpture = () => {
	const { listFilteredSculptures } = useContext(SculptureContext);
	return (
		/* Spinner and timer */
		<div>
			<div>
				<SculptureList items={listFilteredSculptures} />
			</div>
		</div>
	);
};

export default Sculpture;
