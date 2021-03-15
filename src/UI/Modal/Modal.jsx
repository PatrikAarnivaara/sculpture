import React from 'react';
import './Modal.css';

const Modal = ({ icon, text, alt }) => {
	window.onclick = function (event) {
		const modal = document.getElementById('collectionModal');
		if (event.target === modal) {
			modal.style.display = 'none';
		}
	};

	return (
		<div className="modal" id="collectionModal">
			<div className="modal-content">
				<span>{text}</span>
				<img src={icon} alt={alt} />
			</div>
		</div>
	);
};

export default Modal;
