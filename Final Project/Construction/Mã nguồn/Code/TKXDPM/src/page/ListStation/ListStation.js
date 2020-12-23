import React, { useState, useEffect } from 'react';
import { getAllStation } from '../../api/station.api';
import DockingStation from '../../component/DockingStation';


const ListDockingStation = () => {
    const [stationList, setStationList] = useState([]);

    useEffect(() => {
        getStationFromApi();
    }, []);

    const getStationFromApi = async () => {
        try {
            const queryResult = await getAllStation();
            setStationList(queryResult);
        }
        catch (err) {
            console.log(err);
            setStationList([]);
        }
    }

    return (
        <div className="station-container">
            <div className="station-header">Danh sách bãi xe</div>
            { stationList !== undefined ?
                <div className="list-station flex">
                    { stationList.map((item) =>
                        <DockingStation station={ item } key={ item.id } />
                    ) }
                </div> : null
            }
        </div>
    );
}

export default ListDockingStation;