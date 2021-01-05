import React, { useState, useEffect } from 'react';
import BikeInfor from '../../component/BikeInfor';
import { useParams } from 'react-router-dom';
import {
    addressIcon,
    distanceIcon,
    emptySlotIcon,
    bikeIcon,
    areaIcon
} from "../../image";

import { getAllBike } from '../../api/bike.api';
import { getStationById } from '../../api/station.api';

const ListBike = () => {

    let { id } = useParams();
    const [listBike, setListBike] = useState([]);
    const [station, setStation] = useState('');

    useEffect(() => {
        getStationFromApi();
        getBikeFromApi();
    }, []);



    const getBikeFromApi = async () => {
        let queryResult = await getAllBike(id);
        setListBike(queryResult);
    }

    const getStationFromApi = async () => {
        let queryResult = await getStationById(id);
        setStation(queryResult);
    }

    return (
        <div className="station-container">
            <div className="station-header station-infor">
                <p>{ station.name }</p>
                <div className="flex items-center station-infor-items">
                    <div className="item-attr address">
                        <img src={ addressIcon } alt="address icon" />
                        <p>{ station.address } </p>
                    </div>
                    <div className="item-attr">
                        <img src={ distanceIcon } alt="distance icon" />
                        <p>{ station.distance } m </p>
                    </div>
                    <div className="item-attr">
                        <img src={ areaIcon } alt="area icon" />
                        <p>{ station.area } m<sup>2</sup> </p>
                    </div>
                    <div className="item-attr">
                        <img src={ bikeIcon } alt="bike icon" />
                        <p>{ station.bikeNumber } </p>
                    </div>
                    <div className="item-attr">
                        <img src={ emptySlotIcon } alt="empty icon" />
                        <p>{ station.emptySlot } </p>
                    </div>
                </div>

            </div>
            <div className="list-station flex list-bike">
                { listBike.map((item) =>
                    <BikeInfor bike={ item } key={ item.position } />
                ) }
            </div>
        </div>
    );
}
export default ListBike;