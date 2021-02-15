import React, { useEffect, useState } from 'react';
import getGoogle from '../../api/getGoogle';
import Searchbar from '../../UI/Searchbar/Searchbar';
import SculptureListItem from './SculptureListItem';
import './Sculpture.css';

const Sculpture = () => {
	const [sculptureList, setSculptureList] = useState([]);

	useEffect(() => {
		const getTestData = async () => {
			try {
				const response = await getGoogle();
				setSculptureList(response);
			} catch (error) {
				console.log(error);
			}
		};
		getTestData();
	}, []);

	return (
		/* Spinner and timer */
		<div>
			<Searchbar />
			<div className="container">
				{sculptureList
					? sculptureList.map((sculpture, index) => (
							<SculptureListItem
								key={index}
								id={sculpture.id}
								image={sculpture.urls.small}
								date={sculpture.created_at}
								description={sculpture.alt_description}
							/>
					  ))
					: []}
			</div>
		</div>
	);
};

export default Sculpture;
