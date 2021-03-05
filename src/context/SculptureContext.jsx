import React, { createContext, useEffect, useState } from 'react';
import artInstituteChicago from '../api/artInstituteChicago';
export const SculptureContext = createContext();

const SculptureContextProvider = (props) => {
	const [sculptures, setSculptures] = useState([]);
	const [listCategories, setListCategories] = useState([]);
	const [itemsSelected, setItemsSelected] = useState([]);
	const [listArtInstituteChicago, setlistArtInstituteChicago] = useState([]);
	const [listFilteredSculptures, setListFilteredSculptures] = useState([]);
	const [sortedList09, setSortedList09] = useState([]);
	const [sortedList90, setSortedList90] = useState([]);
	const [sortedListAZ, setSortedListAZ] = useState([]);
	const [sortedListZA, setSortedListZA] = useState([]);
	const [test, setTest] = useState('');

	useEffect(() => {
		function filterSelectedItems() {
			switch (test) {
				case 'sort09':
					setListFilteredSculptures(sortedList09);
					break;
				case 'sort90':
					setListFilteredSculptures(sortedList90);
					break;
				case 'sortAZ':
					setListFilteredSculptures(sortedListAZ);
					break;
				case 'sortZA':
					setListFilteredSculptures(sortedListZA);
					break;
				case 'filter':
					let filteredItems = listArtInstituteChicago;
					filteredItems = filteredItems.filter((filteredItem) => {
						return itemsSelected.includes(filteredItem.category_titles[0]);
					});
					if (filteredItems <= 0) {
						setListFilteredSculptures(listArtInstituteChicago);
					} else {
						setListFilteredSculptures(filteredItems);
					}

					break;
				default:
					setListFilteredSculptures(listArtInstituteChicago);
			}
		}
		filterSelectedItems();
	}, [
		itemsSelected,
		listArtInstituteChicago,
		setListFilteredSculptures,
		sortedList09,
		sortedList90,
		sortedListAZ,
		sortedListZA,
		test,
	]);

	const getListOfSculptures = async (query) => {
		try {
			const response = await artInstituteChicago.get(
				`artworks/search?size=10&q=${query}[term][is_public_domain]=true&limit=2&fields=id,title,image_id,classification_titles,style_title,category_titles,date_start`
			);
			if (response.status === 200) {
				filterCategories(response.data.data);
				setlistArtInstituteChicago(response.data.data);
				/* Necessary? */
				setListFilteredSculptures(response.data.data);
			}
		} catch (ex) {
			return { success: false, error: ex.message };
		}
	};

	function selectedCategories(selected) {
		setTest('filter');
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

	function filterCategories(responseDataList) {
		/* Move to separate function and change name of variable x */
		const x = responseDataList.map((responseData) => {
			return responseData.category_titles[0];
		});

		let temp = '';
		let counter = 0;
		let tempArray = [];
		let sortedList = x.sort();

		sortedList.forEach((element) => {
			if (element !== temp) {
				counter++;
				temp = element;
				tempArray.push({ id: counter, category: temp });
			} else {
				return;
			}
		});
		setListCategories(tempArray);
	}

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
				removeCategory,
				setSortedList09,
				setSortedList90,
				setSortedListAZ,
				setSortedListZA,
				setTest,
			}}
		>
			{props.children}
		</SculptureContext.Provider>
	);
};

export default SculptureContextProvider;
