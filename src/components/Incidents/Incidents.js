import React, { useEffect, useState } from 'react';

import { getApiCall } from '../utils/request';
import moment from 'moment'
import ModalPage from '../Modal/Modal'
import CompoenentModalPage from '../Modal/CompoenentModalPage';
const NameCard = () => {
    const [data, setData] = useState({
        incidet: []
    });
    const [modalData, setModalData] = useState();
    const [compoent, setCompoent] = useState();

    useEffect(() => {
        callIncident();
    }, [])

    const callIncident = async () => {
        const url = 'https://s2k7tnzlhrpw.statuspage.io/api/v2/incidents.json';
        const resp = await getApiCall(url);
        setData({ ...data, incidet: resp.incidents })
    }

    const viewUpdates = (e) => {
        setCompoent({
            ...compoent,
            show: true,
            data: e
        })
    }
    const closeComponent = () => {
        setCompoent({
            ...compoent,
            show: false,
            data: ''
        })
    }
    const viewComponent = (e) => {
        setModalData({
            ...modalData,
            show: true,
            data: e
        })
    }

    const closeModal = () => {
        setModalData({
            ...modalData,
            show: false,
            data: ''
        })
    }
    return (
        <div>
            {(modalData && modalData.show) &&
                <ModalPage
                    data={modalData.data}
                    close={closeModal}
                />
            }
            {(compoent && compoent.show) &&
                <CompoenentModalPage
                    data={compoent.data}
                    close={closeComponent}
                />
            }
            {
                (data.incidet.length > 0) ?
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope='col'>status</th>
                                    <th scope="col">impact</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Monitoring At</th>
                                    <th scope="col">Updated At</th>
                                    <th scope="col">shortlink</th>
                                    <th scope='col'>Updates</th>
                                    <th scope='col'>Components</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.incidet.map((v, i) => {
                                        return (
                                            <tr key={'_ind' + i}>
                                                <th scope="row">{v.id}</th>
                                                <td>{v.name}</td>
                                                <td>{v.status}</td>
                                                <td>{v.impact}</td>
                                                <td>{moment(v.created_at).format('LL')}</td>
                                                <td>{moment(v.monitoring_at).format('LL')}</td>
                                                <td>{moment(v.updated_at).format('LL')}</td>
                                                <td>
                                                    <a target='_blank' href={v.shortlink}>Link</a>
                                                </td>
                                                <td>
                                                    <input type="button" value='View' onClick={() => { viewUpdates(v) }} />
                                                </td>
                                                <td>
                                                    <input type="button" value='View' onClick={() => { viewComponent(v) }} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div> : <h4>Loading...</h4>
            }
        </div>
    )
}
export default NameCard;