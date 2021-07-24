import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context'


const Modal = () => {
    const { removeModal, modal } = useGlobalContext();
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeModal();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [modal, removeModal]);
    return <p className={`alert alert-${modal.type}`}>{modal.msg}</p>

}

export default Modal
