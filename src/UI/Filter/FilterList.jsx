import React, { useState } from 'react';
import SculptureList from '../../components/sculpture/SculptureList';

const FilterList = ({ items }) => {
	const [selected, setSelected] = useState(items);
	console.log(selected);

	function onChangeItem(event) {
		let filteredItems = items;
		filteredItems = filteredItems.filter((selected) => selected.category_titles[0] === event.target.value);
		setSelected(filteredItems);
	}

	return (
		<div>
			<div>
				<button
					onClick={() => {
						setSelected([]);
					}}
				>
					clear
				</button>
				<select className="custom-select" onChange={onChangeItem}>
					{items.length ? (
						items.map((item) => (
							<option className="dropdown-filter" value={item.category_titles[0]} key={item.id}>
								{item.category_titles[0]}
							</option>
						))
					) : (
						<option>Filter by Category</option>
					)}
				</select>
			</div>
			<SculptureList items={selected.length === 0 ? items : selected} />
		</div>
	);
};

export default FilterList;
