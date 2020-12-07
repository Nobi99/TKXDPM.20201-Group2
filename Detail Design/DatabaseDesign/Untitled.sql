CREATE TABLE `Transaction` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar(255),
  `fee` int,
  `bike_id` int,
  `user_id` int,
  `create_at` varchar(255),
  `end_at` varchar(255),
  `interbank_transaction_id` int
);

CREATE TABLE `Station` (
  `station_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `address` varchar(255),
  `bike_number` int,
  `empty_slot` int,
  `area` int,
  `distance` int,
  `time` int
);

CREATE TABLE `Bike` (
  `bike_id` int PRIMARY KEY AUTO_INCREMENT,
  `battery` int,
  `bike_value` int,
  `is_rented` tinyint,
  `bike_type` varchar(255),
  `station_id` int,
  `position` int,
  `code` int
);

CREATE TABLE `User` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `age` int,
  `sex` varchar(20),
  `government_id` int,
  `phone` int,
  `address` varchar(255)
);

CREATE TABLE `Card` (
  `card_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `balance` int,
  `token_hash_code` varchar(255)
);

ALTER TABLE `Bike` ADD FOREIGN KEY (`bike_id`) REFERENCES `Transaction` (`bike_id`);

ALTER TABLE `Bike` ADD FOREIGN KEY (`station_id`) REFERENCES `Station` (`station_id`);

ALTER TABLE `Transaction` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`user_id`);

ALTER TABLE `Card` ADD FOREIGN KEY (`card_id`) REFERENCES `User` (`user_id`);
