/**
 * Function caculates the hiring fee when you hire a Bike not using electric
 * @param {Number} hiringTime 
 * @returns {Number} fee when hiring Bike
 */

const caculatorHiringFeeBike = (hiringTime) => {
    console.log("bike");
    if (hiringTime <= 10) {
        return 0;
    }
    else if (10 < hiringTime && hiringTime <= 30) {
        return 10000;
    }
    else {
        return (Math.ceil(hiringTime - 30) / 15) * 3000 + 10000;
    }
}

/**
 * Function caculates the hiring fee when you hire a electrical Bike 
 * @param {Number} hiringTime 
 * @returns {Number} Fee when hiring E Bike
 */

const caculatorHiringFeeEBike = (hiringTime) => {
    console.log("Ebike");
    if (hiringTime <= 10) {
        return 0;
    }
    else if (10 < hiringTime && hiringTime <= 30) {
        return 15000;
    }
    else {
        return (Math.ceil(hiringTime - 30) / 15) * 4500 + 15000;
    }
}

export {
    caculatorHiringFeeBike,
    caculatorHiringFeeEBike
}