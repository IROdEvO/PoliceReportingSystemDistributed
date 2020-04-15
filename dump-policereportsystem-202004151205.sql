-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: policereportsystem
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table ` bank`
--

DROP TABLE IF EXISTS ` bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE ` bank` (
  `bank_id` int(11) NOT NULL,
  `account_no` varchar(100) NOT NULL,
  `fine_amount` decimal(7,2) NOT NULL,
  PRIMARY KEY (`bank_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table ` bank`
--

LOCK TABLES ` bank` WRITE;
/*!40000 ALTER TABLE ` bank` DISABLE KEYS */;
/*!40000 ALTER TABLE ` bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_of_vehicles`
--

DROP TABLE IF EXISTS `category_of_vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category_of_vehicles` (
  `licence_no` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  PRIMARY KEY (`licence_no`,`category`),
  CONSTRAINT `category_of_vehicles_fk` FOREIGN KEY (`licence_no`) REFERENCES `driver` (`licence_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_of_vehicles`
--

LOCK TABLES `category_of_vehicles` WRITE;
/*!40000 ALTER TABLE `category_of_vehicles` DISABLE KEYS */;
/*!40000 ALTER TABLE `category_of_vehicles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `driver`
--

DROP TABLE IF EXISTS `driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `driver` (
  `licence_no` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `nic` char(10) DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) NOT NULL,
  `password` varchar(30) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`licence_no`),
  KEY `driver_fk` (`admin_id`),
  CONSTRAINT `driver_fk` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver`
--

LOCK TABLES `driver` WRITE;
/*!40000 ALTER TABLE `driver` DISABLE KEYS */;
/*!40000 ALTER TABLE `driver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fines`
--

DROP TABLE IF EXISTS `fines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fines` (
  `fine_no` int(11) NOT NULL,
  `licence_no` int(11) NOT NULL,
  `police_id` int(11) NOT NULL,
  `police_station` varchar(100) DEFAULT NULL,
  `status` varchar(30) NOT NULL,
  `court` varchar(100) NOT NULL,
  `court_date` datetime NOT NULL,
  `vehical_category` varchar(50) DEFAULT NULL,
  `total_amount` decimal(7,2) DEFAULT NULL,
  `vehicle_no` varchar(20) DEFAULT NULL,
  `valid_until` date DEFAULT NULL,
  `issue_date` date DEFAULT NULL,
  `issue_time` datetime DEFAULT NULL,
  PRIMARY KEY (`fine_no`),
  KEY `newtable_fk` (`licence_no`),
  KEY `newtable_fk_1` (`police_id`),
  CONSTRAINT `newtable_fk` FOREIGN KEY (`licence_no`) REFERENCES `driver` (`licence_no`),
  CONSTRAINT `newtable_fk_1` FOREIGN KEY (`police_id`) REFERENCES `police_officer` (`police_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fines`
--

LOCK TABLES `fines` WRITE;
/*!40000 ALTER TABLE `fines` DISABLE KEYS */;
/*!40000 ALTER TABLE `fines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `make_payment`
--

DROP TABLE IF EXISTS `make_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `make_payment` (
  `bank_id` int(11) NOT NULL,
  `licence_no` int(11) NOT NULL,
  `Date` date DEFAULT NULL,
  `Time` datetime DEFAULT NULL,
  PRIMARY KEY (`bank_id`,`licence_no`),
  KEY `make_payment_fk` (`licence_no`),
  CONSTRAINT `make_payment_fk` FOREIGN KEY (`licence_no`) REFERENCES `driver` (`licence_no`),
  CONSTRAINT `make_payment_fk_1` FOREIGN KEY (`bank_id`) REFERENCES ` bank` (`bank_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `make_payment`
--

LOCK TABLES `make_payment` WRITE;
/*!40000 ALTER TABLE `make_payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `make_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offences`
--

DROP TABLE IF EXISTS `offences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offences` (
  `fine_no` int(11) NOT NULL,
  `offence` varchar(100) NOT NULL,
  PRIMARY KEY (`fine_no`,`offence`),
  CONSTRAINT `offences_fk` FOREIGN KEY (`fine_no`) REFERENCES `fines` (`fine_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offences`
--

LOCK TABLES `offences` WRITE;
/*!40000 ALTER TABLE `offences` DISABLE KEYS */;
/*!40000 ALTER TABLE `offences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `police_officer`
--

DROP TABLE IF EXISTS `police_officer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `police_officer` (
  `police_id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`police_id`),
  KEY `police_officer_fk` (`admin_id`),
  CONSTRAINT `police_officer_fk` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `police_officer`
--

LOCK TABLES `police_officer` WRITE;
/*!40000 ALTER TABLE `police_officer` DISABLE KEYS */;
/*!40000 ALTER TABLE `police_officer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'policereportsystem'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-15 12:05:08
