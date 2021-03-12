import React, { useContext } from 'react';
import SculptureList from '../sculpture/SculptureList';
import { SculptureContext } from '../../context/SculptureContext';
import Animation from '../../UI/Animation/Animation';
import icon from '../../assets/camera_eye.svg';
import bookmarked from '../../assets/bookmarked.svg';
import unBookmarked from '../../assets/unbookmarked.svg';
import SearchFilterSort from '../../UI/SearchFilterSort/SearchFilterSort';
import Filter from '../../UI/Filter/Filter';
import Dropdown from '../../UI/Dropdown/Dropdown';
import SortAlphabetical from '../../UI/Sort/SortAlphabetical';
import SortChronological from '../../UI/Sort/SortChronological';
import Searchbar from '../../UI/Searchbar/Searchbar';
import filterIcon from '../../assets/filter_dots.svg';
import './Sculpture.css';

const Sculpture = () => {
	const {
		listFilteredSculptures,
		addSculpture,
		removeSculpture,
		listCategories,
		setSortedList09,
		setSortedList90,
		setSortedListAZ,
		setSortedListZA,
		setTest,
	} = useContext(SculptureContext);
	/* TODO: make add and remove item name more generic */
	return (
		/* Spinner and timer */
		<div>
			<SearchFilterSort
				layout={
					<div>
						<Searchbar />
						<div>
							<Dropdown list={<Filter items={listCategories} />} icon={filterIcon} />
							<SortAlphabetical
								items={listFilteredSculptures}
								setItemsAZ={setSortedListAZ}
								setItemsZA={setSortedListZA}
								test={setTest}
							/>
							<SortChronological
								items={listFilteredSculptures}
								setItems09={setSortedList09}
								setItems90={setSortedList90}
								test={setTest}
							/>
						</div>
					</div>
				}
			/>
			{listFilteredSculptures <= 0 ? (
				<Animation icon={icon} />
			) : (
				<div className="wrapper">
					<SculptureList
						items={listFilteredSculptures}
						iconUnClicked={unBookmarked}
						iconClicked={bookmarked}
						image="image_id"
						date="date_start"
						addItems={addSculpture}
						removeItems={removeSculpture}
					/>
				</div>
			)}
		</div>
	);
};

export default Sculpture;
