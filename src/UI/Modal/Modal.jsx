import React from 'react';
import './Modal.css';

const Modal = ({ icon }) => {
	window.onclick = function (event) {
		const modal = document.getElementById('collectionModal');
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	};

	return (
		<div className="modal" id="collectionModal">
			<div className="modal-content">
				<span>Add images to your collection by clicking.</span>
                <img src={icon} alt="bookmark"/>
			</div>
		</div>
	);
};

export default Modal;
