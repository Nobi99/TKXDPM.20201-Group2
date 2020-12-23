import React from "react";
import { Link } from "react-router-dom";
import {
    addressIcon,
    distanceIcon,
    emptySlotIcon,
    bikeIcon,
    areaIcon
} from "../image";

const DockingStation = ({ station }) => {
    return (
        <Link to={ `/get-bike/station-${station.id}` } className="station-item">
            <h5>{ station.name }</h5>
            <div className="item-attr">
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
        </Link>
    );
};

export default DockingStation;
