import React, { useState, useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';

function DropdownItem({ item, label }) {
	const [selected, setSelected] = useState(false);
	const { selectedCategories, removeCategory } = useContext(SculptureContext);

	const handleSelected = (event) => {
		if (!selected) {
			setSelected(true);
			selectedCategories(event.target.value);
		} else {
			setSelected(false);
			removeCategory(event.target.value);
		}
	};

	return (
		<li onClick={handleSelected} value={item.id} key={item.id} className={selected ? 'selected' : null}>
			{item[label]}
		</li>
	);
}

export default DropdownItem;
