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