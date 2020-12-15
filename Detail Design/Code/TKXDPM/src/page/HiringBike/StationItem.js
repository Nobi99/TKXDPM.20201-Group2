import {
    addressIcon,
    distanceIcon,
    emptySlotIcon,
    bikeIcon,
    areaIcon,
} from "../../image";

export const StationItem = ({ station, getStationData }) => {
    return (
        <div className="station-item">
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
            <div className="btn btn-select" onClick={ () => getStationData(station.id, station.name) }>Chọn</div>
        </div>
    )
}

export default StationItem;