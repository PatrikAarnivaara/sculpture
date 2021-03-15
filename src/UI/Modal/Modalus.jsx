import React, { useCallback, useImperativeHandle, useState } from 'react';
import { createPortal } from 'react-dom';
import './Modalus.css';

const modalElement = document.getElementById('modal-root');

const Modalus = ({ children, defaultOpened = false }, ref) => {
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
			<div className="modal">
				<span role="button" className="modal-close" aria-label="close" onClick={close}>
					x
				</span>
				{children}
			</div>
		) : null,
		modalElement
	);
};

export default React.forwardRef(Modalus);
