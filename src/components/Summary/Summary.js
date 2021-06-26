import React, { useEffect, useState } from 'react';
import { getApiCall } from '../utils/request';
import moment from 'moment'

const NameCard = () => {
    const [data, setData] = useState({
        incidet: []
    });

    useEffect(() => {
        callIncident();
    }, [])


    const callIncident = async () => {
        const url = 'https://s2k7tnzlhrpw.statuspage.io/api/v2/summary.json';
        const resp = await getApiCall(url);
        setData({ ...data, incidet: resp.components })
    }

    return (
        <div>
            {
                (data.incidet.length > 0) ?
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope='col'>status</th>
                                    <th scope="col">group</th>
                                    <th scope="col">Created At</th>
                                    <th scope="col">Updated At</th>
                                    <th scope="col">position</th>
                                    <th scope='col'>showcase</th>
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
                                                <td>{v.group.toString()}</td>
                                                <td>{moment(v.created_at).format('LL')}</td>
                                                <td>{moment(v.updated_at).format('LL')}</td>
                                                <td>{v.position}</td>
                                                <td>{v.showcase.toString()}</td>
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