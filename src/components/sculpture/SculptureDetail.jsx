import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SculptureContext } from '../../context/SculptureContext';
import './Detail.css';

const SculptureDetail = () => {
	/* initailstate ?  */
	const [detail, setDetail] = useState('');
	let { id } = useParams();

	const { listFilteredSculptures } = useContext(SculptureContext);

	useEffect(() => {
		if (id) {
			function findItem() {
				const x = listFilteredSculptures.filter(function (item) {
					return item.id === parseInt(id);
				});
				if (x) {
					setDetail(x[0]);
				}
			}
			findItem();
		}
	}, [id, listFilteredSculptures]);

	function renderDetail() {
		return (
			<div className="detail-wrapper">
				<img
					src={`https://www.artic.edu/iiif/2/${detail.image_id}/full/843,/0/default.jpg`}
					alt={detail.title}
				/>
				<div className="detail-content">
					<p>{detail.title}</p>
					<p>{detail.date_start}</p>
					<p>{detail.category_titles}</p>
				</div>
				<Link to="/">
					<button>BACK</button>
				</Link>
			</div>
		);
	}

	return <div>{detail ? renderDetail() : <p>Try again</p>}</div>;
};

export default SculptureDetail;
