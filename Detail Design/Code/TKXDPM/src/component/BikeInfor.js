import {
    batteryIcon,
    eBikeIcon,
    moneyIcon,
    bikeImage,
    barcodeIcon,
} from '../image'
import { Link } from 'react-router-dom';

/**
 * @param bike to render Bike information ()
 */

const BikeInfor = ({ bike }) => {

    return (
        <Link to={ `/get-bike/hiring-bike/${bike.bikeId}` } className="bike-items" data-position={ bike.position }>
            <div className="top">
                <img src={ bikeImage } alt="bike" />
            </div>
            <div className="item-attr">
                <img src={ eBikeIcon } alt="bike icon" />
                <p>{ bike.name } </p>
            </div>

            <div className="item-attr">
                <img src={ barcodeIcon } alt="bike icon" />
                <p>{ bike.bikeCode } </p>
            </div>

            {
                bike.battery !== -1 ?
                    <div className="item-attr">
                        <img src={ batteryIcon } alt="battery icon" />
                        <p>{ bike.battery }% </p>
                    </div>
                    : null
            }
            <div className="item-attr">
                <img src={ moneyIcon } alt="money icon" />
                <p>{ bike.bikeDeposit.toLocaleString('en-US', { style: 'currency', currency: 'VND' }) } </p>
            </div>
        </Link>
    );
}

export default BikeInfor;