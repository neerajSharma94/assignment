import '../css/style.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context'


const List = () => {
    const { data, handleFilter, filterDate } = useGlobalContext();
    const [filtereddate, setFilteredDate] = useState('');


    return (
        <div className="form-section">
            <section className="section-center">
                <h3>my schedule</h3>
                <div className="form-control">
                    <input type="date" className="form-data-new"
                        value={filtereddate}
                        onChange={(e) => setFilteredDate(e.target.value)}
                    />
                    <button className="submit-btn" onClick={() => filterDate(filtereddate)}>filter</button>
                </div>


                {
                    data.length > 0 ? data.map(item => {
                        return (
                            <div className="form-data" key={item.id}>
                                <p><span className="data-heading">Date :</span> {item.date}</p>
                                <p><span className="data-heading">Time :</span> {item.initialTime}-{item.finalTime}</p>
                                <p><span className="data-heading">Task : </span> {item.task}</p>
                                <p><span className="data-heading">Details :</span> {item.details}</p>
                                <p><span className="data-heading">Status : </span>{item.status}</p>
                                <button className="delete-btn data-btn"
                                    onClick={() => handleFilter(item.id)}
                                >delete</button>
                                <div className="underline"></div>
                            </div>
                        )
                    }) : <div className="center">
                        <div className="center-container">
                            <h4 className="heading-center">no task available on this day</h4>
                            <button className="edit-btn data-btn">
                                <Link to="/">add task</Link>
                            </button>
                        </div>
                    </div>
                }
            </section>

        </div>
    )
}

export default List



