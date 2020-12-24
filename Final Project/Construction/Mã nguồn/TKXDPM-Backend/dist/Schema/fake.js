"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fakeSation = exports.fakeBike = void 0;
var station1 = "('Bãi xe Mèo Lớn', 'Số 8 vườn Hổ, An Dương Vương', 150, 10, 1200, 500, 5)";
var station2 = "('Bãi xe Mèo Nhỏ', 'Số 8 vườn Mèo, đường Quanh Co', 60, 50, 500, 100, 5)";
var station4 = "('Bãi xe HUSGY', 'Số 375/15/82/8 CORKY', 50, 10, 300, 2200, 20)";
var station3 = "('Bãi xe Windy', 'Số 15 Tây Hồ', 250, 100, 1800, 1200, 10)";
var bike = [];
bike[1] = "('Xe đạp điện', 1, 48, 15, 700000), ";
bike[2] = "('Xe đạp đôi', 3, 25, 11, 550000), ";
bike[3] = "('Xe đạp', 2, -1, 16, 400000), ";
bike[4] = "('Xe đạp điện đôi', 2, 95, 850000), ";
bike[5] = "('Xe đạp điện', 2, 59, 36, 700000), ";
bike[6] = "('Xe đạp', 4, -1, 16, 400000), ";
bike[7] = "('Xe đạp đôi', 2, -1, 18, 550000), ";
bike[8] = "('Xe đạp', 2, -1, 17, 400000), ";
bike[9] = "('Xe đạp', 3, -1, 18, 400000), ";
bike[10] = "('Xe đạp đôi', 2, -1, 19, 550000), ";
bike[11] = "('Xe đạp', 2, -1, 22, 400000), ";
bike[12] = "('Xe đạp điện', 1, 56, 6, 700000), ";
bike[13] = "('Xe đạp điện', 4, 72, 26,700000), ";
bike[14] = "('Xe đạp', 2, -1, 8, 400000), ";
bike[15] = "('Xe đạp điện', 3, 89, 14, 700000), ";
bike[16] = "('Xe đạp', 1, -1, 25, 400000)";
var fakeSation = "INSERT INTO station (name, address, bike_number, empty_slot, area, distance, time) VALUES " + station1 + ", " + station2 + ", " + station3 + ", " + station4;
exports.fakeSation = fakeSation;
var fakeBike = "INSERT INTO bike (bike_type, station_id, battery, position, bike_value) VALUES ";
exports.fakeBike = fakeBike;
var len = bike.length;

for (var i = 1; i < len; i++) {
  exports.fakeBike = fakeBike = fakeBike + bike[i];
}