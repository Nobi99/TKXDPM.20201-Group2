-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2020 at 02:37 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecobike`
--

-- --------------------------------------------------------

--
-- Table structure for table `bike`
--

CREATE TABLE `bike` (
  `bike_id` int(11) NOT NULL,
  `bike_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `battery` int(11) DEFAULT -1,
  `bike_value` int(11) NOT NULL,
  `isRented` tinyint(4) DEFAULT 0,
  `station_id` int(11) DEFAULT NULL,
  `position` int(11) NOT NULL,
  `code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bike`
--

INSERT INTO `bike` (`bike_id`, `bike_type`, `battery`, `bike_value`, `isRented`, `station_id`, `position`, `code`) VALUES
(17, 'Xe đạp điện', 48, 700000, 0, 1, 15, 20),
(18, 'Xe đạp đôi', 25, 550000, 0, 4, 11, 11),
(19, 'Xe đạp', -1, 400000, 0, 2, 16, 10),
(20, 'Xe đạp điện đôi', 95, 850000, 0, 4, 17, 21),
(21, 'Xe đạp điện', 59, 700000, 0, 4, 36, 20),
(22, 'Xe đạp', -1, 400000, 0, 2, 16, 10),
(23, 'Xe đạp đôi', -1, 550000, 0, 3, 18, 11),
(24, 'Xe đạp', -1, 400000, 0, 3, 17, 10),
(25, 'Xe đạp', -1, 400000, 0, 4, 18, 10),
(26, 'Xe đạp đôi', -1, 550000, 0, 2, 19, 11),
(27, 'Xe đạp', -1, 400000, 0, 4, 22, 10),
(28, 'Xe đạp điện', 56, 700000, 0, 3, 6, 20),
(29, 'Xe đạp điện', 72, 700000, 0, 4, 26, 20),
(30, 'Xe đạp', -1, 400000, 0, 3, 8, 10),
(31, 'Xe đạp điện', 89, 700000, 0, 4, 14, 20),
(32, 'Xe đạp', -1, 400000, 0, 4, 25, 10);

-- --------------------------------------------------------

--
-- Table structure for table `station`
--

CREATE TABLE `station` (
  `station_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bike_number` int(11) NOT NULL,
  `empty_slot` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  `time` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `station`
--

INSERT INTO `station` (`station_id`, `name`, `address`, `bike_number`, `empty_slot`, `area`, `distance`, `time`) VALUES
(1, 'Bãi xe Mèo Lớn', 'Số 8 vườn Hổ, An Dương Vương', 150, 0, 1200, 500, 5),
(2, 'Bãi xe Mèo Nhỏ', 'Số 8 vườn Mèo, đường Quanh Co', 60, 50, 500, 100, 5),
(3, 'Bãi xe Windy', 'Số 15 Tây Hồ', 250, 100, 1800, 1200, 10),
(4, 'Bãi xe HUSGY', 'Số 375/15/82/8 CORKY', 50, 10, 300, 2200, 20);

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fee` int(11) DEFAULT NULL,
  `bike_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `end_at` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `username`, `fee`, `bike_id`, `user_id`, `created_at`, `end_at`) VALUES
(82, 'Trần Thế Chiến', NULL, 25, 1, '1607417859186', NULL),
(83, 'Trần Thế Chiến', NULL, 29, 1, '1607417912999', NULL),
(84, 'Trần Thế Chiến', NULL, 29, 1, '1607421076901', NULL),
(85, 'Trần Thế Chiến', NULL, 29, 1, '1607421846029', NULL),
(86, 'Trần Thế Chiến', 0, 29, 1, '1607422041093', '1607422122756'),
(87, 'Trần Thế Chiến', NULL, 29, 1, '1607422223501', NULL),
(88, 'Trần Thế Chiến', NULL, 29, 1, '1607422318062', NULL),
(89, 'Trần Thế Chiến', NULL, 29, 1, '1607422446873', NULL),
(90, 'Trần Thế Chiến', 0, 29, 1, '1607422530069', '1607422548289'),
(91, 'Trần Thế Chiến', 0, 30, 1, '1607422661710', '1607422683657'),
(92, 'Trần Thế Chiến', 0, 25, 1, '1607446385163', '1607446444163'),
(93, 'Trần Thế Chiến', NULL, 27, 1, '1607447053957', NULL),
(94, 'Trần Thế Chiến', 0, 27, 1, '1607447212338', '1607447214881'),
(95, 'Trần Thế Chiến', 0, 23, 1, '1607447269732', '1607447272194'),
(96, 'Trần Thế Chiến', 0, 25, 1, '1607447348228', '1607447351243'),
(97, 'Trần Thế Chiến', NULL, 25, 1, '1607447872763', NULL),
(98, 'Trần Thế Chiến', NULL, 25, 1, '1607448096216', NULL),
(99, 'Trần Thế Chiến', NULL, 25, 1, '1607448259834', NULL),
(100, 'Trần Thế Chiến', 0, 30, 1, '1607448389909', '1607448399208'),
(101, 'Trần Thế Chiến', NULL, 25, 1, '1607500941456', NULL),
(102, 'Trần Thế Chiến', 0, 32, 1, '1607503905526', '1607503917368'),
(103, 'Trần Thế Chiến', 0, 25, 1, '1607504019038', '1607504026144'),
(104, 'Trần Thế Chiến', 0, 31, 1, '1607504172682', '1607504178152'),
(105, 'Trần Thế Chiến', 0, 31, 1, '1607504229532', '1607504231954'),
(106, 'Trần Thế Chiến', 0, 31, 1, '1607504408667', '1607504410996'),
(107, 'Trần Thế Chiến', 115500, 20, 1, '1607511574996', '1607533431380'),
(108, 'Trần Thế Chiến', 0, 20, 1, '1607573587798', '1607573596466'),
(109, 'Trần Thế Chiến', 0, 25, 1, '1607573633805', '1607573635482'),
(110, 'Trần Thế Chiến', 0, 23, 1, '1607580009844', '1607580015228'),
(111, 'Trần Thế Chiến', 0, 28, 1, '1608646856078', '1608646865582'),
(112, 'Trần Thế Chiến', 0, 21, 1, '1608651727494', '1608651731673'),
(113, 'Trần Thế Chiến', 0, 24, 1, '1608651988019', '1608651992355'),
(114, 'Trần Thế Chiến', NULL, 25, 1, '1608652127183', NULL),
(115, 'Trần Thế Chiến', 0, 25, 1, '1608652168207', '1608652170186'),
(116, 'Trần Thế Chiến', 0, 23, 1, '1608652782501', '1608652785465'),
(117, 'Trần Thế Chiến', 0, 26, 1, '1608652946495', '1608652949012'),
(118, 'Trần Thế Chiến', 0, 23, 1, '1608653264261', '1608653277395'),
(119, 'Trần Thế Chiến', NULL, 26, 1, '1608654395638', NULL),
(120, 'Trần Thế Chiến', 0, 22, 1, '1608825262222', '1608825315171'),
(121, 'Trần Thế Chiến', 0, 18, 1, '1608833071898', '1608833076634'),
(122, 'Trần Thế Chiến', 0, 30, 1, '1608858472144', '1608858513288'),
(123, 'Trần Thế Chiến', 0, 30, 1, '1608858664801', '1608858669904');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bike`
--
ALTER TABLE `bike`
  ADD PRIMARY KEY (`bike_id`),
  ADD KEY `station_id` (`station_id`);

--
-- Indexes for table `station`
--
ALTER TABLE `station`
  ADD PRIMARY KEY (`station_id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bike_id` (`bike_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bike`
--
ALTER TABLE `bike`
  MODIFY `bike_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `station`
--
ALTER TABLE `station`
  MODIFY `station_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bike`
--
ALTER TABLE `bike`
  ADD CONSTRAINT `bike_ibfk_1` FOREIGN KEY (`station_id`) REFERENCES `station` (`station_id`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`bike_id`) REFERENCES `bike` (`bike_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
