import React from 'react'
import '../css/style.css'

import { useGlobalContext } from '../Context'
import Modal from './Modal'

const Form = () => {
    const { handleInput, handleSubmit, state, modal } = useGlobalContext();
    return (
        <>
            <section className="section-center">
                <form className="form-section" onSubmit={(e) => handleSubmit(e)}>
                    {modal.show && <Modal />}

                    <h3>add daily schedule</h3>

                    <div className="form-control">
                        <input type="text"
                            className="form-data-new"
                            placeholder="Add Task"
                            name="task"
                            value={state.task}
                            onChange={(e) => handleInput(e)}
                        />

                    </div>

                    <div className="form-control">
                        <input type="text"
                            className="form-data-new"
                            placeholder="Add status"
                            name="status"
                            value={state.status}
                            onChange={(e) => handleInput(e)}
                        />

                    </div>
                    <div className="form-control">
                        <input type="text"
                            className="form-data-new"
                            placeholder="Add details"
                            name="details"
                            value={state.details}
                            onChange={(e) => handleInput(e)}
                        />

                    </div>

                    <div className="form-control">
                        <input type="date"
                            className="form-data-new"
                            placeholder="Add date"
                            name="date"
                            value={state.date}
                            onChange={(e) => handleInput(e)}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="time" className="time-label time">From :</label>
                        <input type="time"
                            className="form-data-new form-data-new-1"
                            name="initialTime"
                            value={state.initialTime}
                            onChange={(e) => handleInput(e)}
                        />
                        <label htmlFor="time" className="time-label">To :</label>
                        <input type="time"
                            className="form-data-new"
                            name="finalTime"
                            value={state.finalTime}
                            onChange={(e) => handleInput(e)}
                        />
                    </div>
                    <div className="center">
                        <button type="submit"
                            className="data-btn"
                            onClick={(e) => handleSubmit(e)}
                        >add</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Form
