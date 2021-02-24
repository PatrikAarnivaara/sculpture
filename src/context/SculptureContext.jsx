import React, { createContext, useEffect, useState } from 'react';
import artInstituteChicago from '../api/artInstituteChicago';
export const SculptureContext = createContext();

const SculptureContextProvider = (props) => {
	const [sculptures, setSculptures] = useState([]);
	const [sculptureListAIC, setSculptureListAIC] = useState([]);
	const [itemsSelected, setItemsSelected] = useState([]);
	const [listOfFilteredSculptures, setListOfFilteredSculptures] = useState([]);
	const [testList, setTestList] = useState([]);

	/* console.log('itemSelected', itemsSelected);
	console.log('listOfFilteredSculptures', listOfFilteredSculptures);
	console.log('testList', testList); */

	useEffect(() => {
		function filterSelectedItems() {
			let filteredItems = listOfFilteredSculptures;
			console.log(filteredItems);

			filteredItems = filteredItems.filter(function (filteredItem) {
				return itemsSelected.indexOf(filteredItem.id) > -1;
			});
			setTestList(filteredItems);
		}
		filterSelectedItems();
	}, [itemsSelected, listOfFilteredSculptures]);

	const getListOfSculptures = async (query) => {
		try {
			const response = await artInstituteChicago.get(
				`artworks/search?size=10&q=${query}[term][is_public_domain]=true&limit=2&fields=id,title,image_id,classification_titles,style_title,category_titles,date_start`
			);
			if (response.status === 200) {
				setSculptureListAIC(response.data.data);
				setListOfFilteredSculptures(response.data.data);
				setTestList(response.data.data);
			}
		} catch (ex) {
			return { success: false, error: ex.message };
		}
	};

	function selectedCategories(selected) {
		setItemsSelected([...itemsSelected, selected]);
		console.log('item 33', itemsSelected);
	}

	console.log('item 37', itemsSelected);

	const addSculpture = (id, url, description) => {
		if (sculptures.some((sculpture) => sculpture.id === id)) {
			return;
		} else {
			setSculptures([...sculptures, { id, url, description }]);
		}
	};

	const removeSculpture = (id) => {
		setSculptures(sculptures.filter((sculpture) => sculpture.id !== id));
	};

	return (
		<SculptureContext.Provider
			value={{
				sculptures,
				sculptureListAIC,
				listOfFilteredSculptures,
				testList,
				setSculptureListAIC,
				getListOfSculptures,
				selectedCategories,
				addSculpture,
				removeSculpture,
			}}
		>
			{props.children}
		</SculptureContext.Provider>
	);
};

export default SculptureContextProvider;
