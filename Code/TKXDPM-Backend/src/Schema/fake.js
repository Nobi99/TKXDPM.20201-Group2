

const station1 = "('Bãi xe Mèo Lớn', 'Số 8 vườn Hổ, An Dương Vương', 150, 10, 1200, 500, 5)";
const station2 = "('Bãi xe Mèo Nhỏ', 'Số 8 vườn Mèo, đường Quanh Co', 60, 50, 500, 100, 5)";
const station4 = "('Bãi xe HUSGY', 'Số 375/15/82/8 CORKY', 50, 10, 300, 2200, 20)";
const station3 = "('Bãi xe Windy', 'Số 15 Tây Hồ', 250, 100, 1800, 1200, 10)";

let bike = [];
bike[1] = "('Xe đạp điện', 1, 48, 15, 70000), ";
bike[2] = "('Xe đạp đôi', 3, 25, 11, 3500000), ";
bike[3] = "('Xe đạp', 2, -1, 16, 1500000), ";
bike[4] = "('Xe đạp điện đôi', 2, 95, 17, 15500000), ";
bike[5] = "('Xe đạp điện', 2, 59, 36, 1500000), ";
bike[6] = "('Xe đạp', 4, -1, 16, 1500000), ";
bike[7] = "('Xe đạp đôi', 2, -1, 18, 1500000), ";
bike[8] = "('Xe đạp', 2, -1, 17, 1500000), ";
bike[9] = "('Xe đạp', 3, -1, 18, 1500000), ";
bike[10] = "('Xe đạp đôi', 2, -1, 19, 5500000), ";
bike[11] = "('Xe đạp', 2, -1, 22, 2500000), ";
bike[12] = "('Xe đạp điện', 1, 56, 6, 1500000), ";
bike[13] = "('Xe đạp điện', 4, 72, 26, 15000000), ";
bike[14] = "('Xe đạp', 2, -1, 8, 1500000), ";
bike[15] = "('Xe đạp điện', 3, 89, 14, 9500000), ";
bike[16] = "('Xe đạp', 1, -1, 25, 3500000)";
let fakeSation =
    `INSERT INTO station (name, address, bike_number, empty_slot, area, distance, time) VALUES ${station1}, ${station2}, ${station3}, ${station4}`;


let fakeBike =
    `INSERT INTO bike (bike_type, station_id, battery, position, bike_value) VALUES `;

let len = bike.length;

for (let i = 1; i < len; i++) {
    fakeBike = fakeBike + bike[i];
}

export default fakeBike;