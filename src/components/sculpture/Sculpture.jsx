import React, { useContext } from 'react';
import SculptureList from '../sculpture/SculptureList';
import { SculptureContext } from '../../context/SculptureContext';
import sculptureIcon from '../../assets/sculpture.svg';
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
						{/* <img className="bottom" src={sculptureIcon} alt="sculpture-icon" /> */}
						{/* <h5>All images are fetched from Chicago API</h5> */}
					</div>
				) : (
					<SculptureList items={listFilteredSculptures} />
				)}
			</div>
		</div>
	);
};

export default Sculpture;
