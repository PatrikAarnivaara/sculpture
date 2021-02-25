import React, { createContext, useEffect, useState } from 'react';
import artInstituteChicago from '../api/artInstituteChicago';
export const SculptureContext = createContext();

const SculptureContextProvider = (props) => {
	const [sculptures, setSculptures] = useState([]);
	const [listCategories, setListCategories] = useState([]);
	const [itemsSelected, setItemsSelected] = useState([]);
	const [listArtInstituteChicago, setlistArtInstituteChicago] = useState([]);
	const [listFilteredSculptures, setListFilteredSculptures] = useState([]);

	useEffect(() => {
		function filterSelectedItems() {
			let filteredItems = listArtInstituteChicago;
			if (itemsSelected.length > 0) {
				filteredItems = filteredItems.filter(function (filteredItem) {
					return itemsSelected.indexOf(filteredItem.id) > -1;
				});
			}
			setListFilteredSculptures(filteredItems);
		}
		filterSelectedItems();
	}, [itemsSelected, listArtInstituteChicago]);

	const getListOfSculptures = async (query) => {
		try {
			const response = await artInstituteChicago.get(
				`artworks/search?size=10&q=${query}[term][is_public_domain]=true&limit=2&fields=id,title,image_id,classification_titles,style_title,category_titles,date_start`
			);
			if (response.status === 200) {
				setListCategories(response.data.data);
				setlistArtInstituteChicago(response.data.data);
				setListFilteredSculptures(response.data.data);
			}
		} catch (ex) {
			return { success: false, error: ex.message };
		}
	};

	function selectedCategories(selected) {
		setItemsSelected([...itemsSelected, selected]);
	}

	function removeCategory(selected) {
		let n = selected;
		let filteredCategories = itemsSelected.filter(function (itemSelected) {
			return itemSelected !== n;
		});
		setItemsSelected(filteredCategories);
	}

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
				listCategories,
				listFilteredSculptures,
				getListOfSculptures,
				selectedCategories,
				addSculpture,
				removeSculpture,
				removeCategory
			}}
		>
			{props.children}
		</SculptureContext.Provider>
	);
};

export default SculptureContextProvider;
