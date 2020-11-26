"use strict";

var Transaction = {
  id: 'transaction_id INT AUTO_INCREMENT PRIMARY KEY',
  userName: 'user_name VARCHAR(255) NOT NULL',
  hiringFee: 'fee INT NOT NULL',
  bikeNumber: 'bike_number INT NOT NULL',
  emptySlot: 'empty_slot INT NOT NULL',
  area: 'area INT NOT NULL',
  distance: 'distance INT NOT NULL',
  time: 'time INT NOT NULL'
};