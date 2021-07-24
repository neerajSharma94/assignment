import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext();
const getLocalStorage = () => {
    let userData = localStorage.getItem('userData');
    if (userData) {
        return (userData = JSON.parse(localStorage.getItem('userData')));
    } else {
        return [];
    }
};

const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        task: '', initialTime: '', finalTime: '', details: '', status: '', date: ''
    })
    const [modal, setModal] = useState({ show: false, msg: '', type: '' })
    const [userData, setUserData] = useState(getLocalStorage());

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const id = new Date().getTime().toString()

        setState({ ...state, [name]: value, id });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!state.date || !state.task || !state.status || !state.initialTime || !state.details) {
            setModal({ show: true, msg: 'please enter all information', type: 'danger' })

        } else {
            setUserData([...userData, state]);
            setModal({ show: true, msg: 'Data added', type: 'success' })
            setState({ task: "", initialTime: "", finalTime: "", status: "", details: "", date: "" });

        }
    }


    const handleFilter = (id) => {
        const newList = userData.filter(item => item.id !== id);
        setUserData(newList);
    }

    const filterDate = (date) => {
        const newData = userData.filter(item => item.date === date);
        setUserData(newData);
    }


    const removeModal = () => {
        setModal({ show: false, msg: '', type: '' });
    }
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
        console.log('hi from useEffect');
    }, [userData]);

    return <AppContext.Provider value={{ state, data: userData, handleInput, handleSubmit, handleFilter, filterDate, modal, removeModal }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider };

