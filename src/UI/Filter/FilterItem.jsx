import React, { useState, useContext } from 'react';
import { SculptureContext } from '../../context/SculptureContext';

function FilterItem({ item }) {
	const [selected, setSelected] = useState(false);
	const { selectedCategories, removeCategory } = useContext(SculptureContext);

	const handleSelected = (id) => {
		if (!selected) {
			setSelected(true);
			selectedCategories(id);
		} else {
			setSelected(false);
			removeCategory(id);
		}
	};

	return (
		<li onClick={() => handleSelected(item.category)} key={item.id} className={selected ? 'selected' : null}>
			{item.category}
		</li>
	);
}

export default FilterItem;
