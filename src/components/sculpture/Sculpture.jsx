import React, { useContext } from 'react';
import SculptureList from '../sculpture/SculptureList';
import { SculptureContext } from '../../context/SculptureContext';
import labyrinthIcon from '../../assets/camera.svg';
import './Sculpture.css';

const Sculpture = () => {
	const { listFilteredSculptures } = useContext(SculptureContext);
	return (
		/* Spinner and timer */
		<div>
			<div>
				{listFilteredSculptures <= 0 ? (
					<div className="animation">
						<img className="top" src={labyrinthIcon} alt="labyrinth-icon" />
					</div>
				) : (
					<div >
						<SculptureList items={listFilteredSculptures} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Sculpture;
