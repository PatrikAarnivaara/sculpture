import React, { useState } from 'react';
import SculptureList from '../../components/sculpture/SculptureList';

const FilterList = ({ items }) => {
	const [selectedItems, setSelectedItems] = useState(items);
	const [category, setCategory] = useState([]);

	function onChangeItem(event) {
		setCategory([...category, event.target.value]);
		filterSelectedItems();
	}

	function clearFilter() {
		setSelectedItems([]);
		setCategory([]);
	}

	function filterSelectedItems() {
		let filteredItems = items;
		filteredItems = filteredItems.filter((filteredItem) => category.indexOf(filteredItem.category_titles[0]) > -1);
		setSelectedItems(filteredItems);
	}

	return (
		<div>
			<div></div>
			{/* <div>
				<button onClick={clearFilter}>clear</button>
				<select name="categories" id="categories" className="custom-select" onChange={onChangeItem} >
					{items.length ? (
						items.map((item) => (
							<option className="dropdown-filter" type="checkbox" value={item.category_titles[0]} key={item.id}>
								{item.category_titles[0]}
							</option>
						))
					) : (
						<option>Filter by Category</option>
					)}
				</select>
			</div> */}
			<SculptureList items={selectedItems.length === 0 ? items : selectedItems} />
		</div>
	);
};

export default FilterList;
