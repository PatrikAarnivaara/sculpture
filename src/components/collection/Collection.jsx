import React, { useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';
import SculptureList from '../sculpture/SculptureList';
import Modal from '../../UI/Modal/Modal';
import Heading from '../../UI/Heading/Heading';
import SearchFilterSort from '../../UI/SearchFilterSort/SearchFilterSort';
import icon from '../../assets/unbookmarked.svg';
import trashIcon from '../../assets/trash.svg';

const Collection = () => {
	const { sculptures, removeSculpture } = useContext(SculptureContext);
	return (
		<div>
			<SearchFilterSort layout={<Heading />} />
			{sculptures <= 0 ? (
				<Modal icon={icon} text="Add images to your collection by clicking." alt="bookmark" />
			) : (
				<SculptureList
					items={sculptures}
					iconUnClicked={trashIcon}
					image="image_id"
					date="date_start"
					addItems={removeSculpture}
					removeItems={null}
				/>
			)}
		</div>
	);
};

export default Collection;
