import React, { useState } from 'react';

function DropdownItem(item) {
    console.log(item)
	const [selected, setSelected] = useState(false);

	const handleSelected = () => {
		if (!selected) {
            console.log(true)
			setSelected(true);
		} else {
			setSelected(false);
		}
	};

	return (
		<li onClick={handleSelected} value={item.id} key={item.id} className={selected ? 'selected' : null}>
			{item.category_titles[0]}
		</li>
	);
}

export default DropdownItem;
