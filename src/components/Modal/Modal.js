import moment from 'moment';
import React, { Component, useState } from 'react';
import './modal.css'
const ModalPage = (props) => {

    const [modal, setModal] = useState(false)
    const { data } = props;


    const closeModal = () => {
        props.close();
    }




    return (
        <div className="pop-up-main-container" onClick={closeModal}>
            <div className="pop-up-main-wrapper container p-5">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">id </th>
                                <th scope="row">{data.id}</th>
                            </tr>
                            <tr>
                                <th scope="col">name</th>
                                <td>{data.name}</td>
                            </tr>
                            <tr>
                                <th scope='col'>status</th>
                                <td>{data.status}</td>
                            </tr>
                            <tr>
                                <th scope="col">description</th>
                                <td>{data.description}</td>
                            </tr>
                            <tr>
                                <th scope='col'>group</th>
                                <td>{data.group}</td>
                            </tr>
                            <tr>
                                <th scope="col">group_id</th>
                                <td>{data.group_id}</td>
                            </tr>
                            <tr>
                                <th scope="col">only_show_if_degraded</th>
                                <td>{data.only_show_if_degraded}</td>
                            </tr>
                            <tr>
                                <th scope="col">page_id</th>
                                <td>{data.page_id}</td>
                            </tr>
                            <tr>
                                <th scope='col'>position</th>
                                <td>{data.position}</td>
                            </tr>
                            <tr>
                                <th scope='col'>showcase</th>
                                <td>{data.showcase}</td>
                            </tr>
                            <tr>
                                <th scope='col'>start_date</th>
                                <td>{moment(data.start_date).format('LL')}</td>
                            </tr>
                            <tr>
                                <th scope="col">created_at</th>
                                <td>{moment(data.created_at).format('LL')}</td>
                            </tr>
                            <tr>
                                <th scope='col'>updated_at</th>
                                <td>{moment(data.updated_at).format('LL')}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div >

    );

}

export default ModalPage;