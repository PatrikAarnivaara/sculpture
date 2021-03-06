import React, { useCallback, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalElement = document.getElementById('modal-root');

const Modal = ({ children, defaultOpened }, ref) => {
	const [isOpen, setIsOpen] = useState(defaultOpened);

	const close = useCallback(() => setIsOpen(false), []);

	useImperativeHandle(
		ref,
		() => ({
			open: () => setIsOpen(true),
			close,
		}),
		[close]
	);

	return createPortal(
		isOpen ? (
			<div className="modalus" onClick={close}>
				{children}
			</div>
		) : null,
		modalElement
	);
};

export default React.forwardRef(Modal);
