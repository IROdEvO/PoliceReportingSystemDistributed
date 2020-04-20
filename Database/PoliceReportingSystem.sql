-- MySQL dump 10.17  Distrib 10.3.22-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: Police_Reporting_System
-- ------------------------------------------------------
-- Server version	10.3.22-MariaDB

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
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Admin` (
  `Admin_ID` int(11) NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(25) DEFAULT NULL,
  `Last_Name` varchar(25) DEFAULT NULL,
  `Admin_Type` varchar(25) DEFAULT NULL,
  `Password` varchar(250) NOT NULL,
  PRIMARY KEY (`Admin_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin`
--

LOCK TABLES `Admin` WRITE;
/*!40000 ALTER TABLE `Admin` DISABLE KEYS */;
INSERT INTO `Admin` VALUES (1,'Piu','Dom','RMB','$2b$10$Im3eBEK1w.RaitpDtvtGtOzWcmmoU20sv3w9lg9lSFT9v9q/ghnxG'),(2,'Sew','Thar','RMB','$2b$10$OGCe2pUlq3A25RCDpijWHuQPlFx2bU7adz/gchNDjbvJ5nAYethtm'),(3,'Asi','Iro','Police','$2b$10$vnflshMv6Uf2JCjXCbLzd.rFyCk824Vmz73taM9ZbsUk.6gqRGX5a'),(4,'The','Mahanama','RMB','$2b$10$1vy0NPkQLvYE8wFVsS4aIexmxOTmMOqwC755i1w3r7AKMV7Hehq6a'),(5,'Ayesh','Dul','Police','$2b$10$r0iSS99HBuRSlFYKzkobUOHbB27P0XPY5Ad7mDsgj7AjkSIxXU4T2'),(6,'Thu','Das','Police','$2b$10$qWomrJwPO3YcJrbocsGR6eC2/5lGf1zNcDeGDhbQNSWSLqOmte1pq');
/*!40000 ALTER TABLE `Admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Bank`
--

DROP TABLE IF EXISTS `Bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Bank` (
  `Bank_ID` int(11) NOT NULL,
  `Account_No` varchar(100) NOT NULL,
  PRIMARY KEY (`Bank_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Bank`
--

LOCK TABLES `Bank` WRITE;
/*!40000 ALTER TABLE `Bank` DISABLE KEYS */;
INSERT INTO `Bank` VALUES (78955,'78556333'),(98568,'ASD56333'),(9857465,'999885566351');
/*!40000 ALTER TABLE `Bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Driver`
--

DROP TABLE IF EXISTS `Driver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Driver` (
  `License_No` int(11) NOT NULL,
  `Admin_ID` int(11) NOT NULL,
  `First_Name` varchar(25) DEFAULT NULL,
  `Last_Name` varchar(25) DEFAULT NULL,
  `NIC` varchar(12) NOT NULL,
  `Address_Line_1` varchar(100) DEFAULT NULL,
  `Address_Line_2` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Password` varchar(250) NOT NULL,
  PRIMARY KEY (`License_No`),
  KEY `Driver_FK` (`Admin_ID`),
  CONSTRAINT `Driver_FK` FOREIGN KEY (`Admin_ID`) REFERENCES `Admin` (`Admin_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Driver`
--

LOCK TABLES `Driver` WRITE;
/*!40000 ALTER TABLE `Driver` DISABLE KEYS */;
INSERT INTO `Driver` VALUES (56352,2,'Thilini','Perera','857459685421','64/3 Kandy Road','Nittambuwa','thilini@gmail.com','$2b$10$EU8ZGq.R1y.BF5Twbuk4LOtORPyZ6vn2f2/gRUKp3lqT/gDjTQ3c.'),(85745,2,'Natasha','Perera','985745745214','64/3 Kandy Road','Yakkala','natasha@gmail.com','$2b$10$HKgi6pB3zqgmpd1HchTsxe.P1kTWlDTTPxh/dD9nRLJn7jkVrCdEe'),(7896541,5,'Sewmal','Tharindu','125412541254','64/3 Colombo road','Kaluthara','sewmal@gmail.com','$2b$10$boz0vGmbHyInXVnFr9kbOu8W5EWO6oGDdQqc9NKxH8eHTdgNI2oWG');
/*!40000 ALTER TABLE `Driver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Fine`
--

DROP TABLE IF EXISTS `Fine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Fine` (
  `Fine_No` int(11) NOT NULL,
  `License_No` int(11) NOT NULL,
  `Police_ID` int(11) NOT NULL,
  `Police_Station` varchar(100) NOT NULL,
  `Status` varchar(100) NOT NULL,
  `Court` varchar(100) NOT NULL,
  `Court_Date` date NOT NULL,
  `Vehical_Category` varchar(50) DEFAULT NULL,
  `Total_Amount` decimal(7,2) DEFAULT NULL,
  `Vehical_No` varchar(20) NOT NULL,
  `Valid_Until` date NOT NULL,
  `Issued_Date` date NOT NULL,
  `Issued_Time` time NOT NULL,
  PRIMARY KEY (`Fine_No`),
  KEY `Fine_FK` (`Police_ID`),
  KEY `Fine_FK_1` (`License_No`),
  CONSTRAINT `Fine_FK` FOREIGN KEY (`Police_ID`) REFERENCES `Police_Officer` (`Police_ID`),
  CONSTRAINT `Fine_FK_1` FOREIGN KEY (`License_No`) REFERENCES `Driver` (`License_No`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Fine`
--

LOCK TABLES `Fine` WRITE;
/*!40000 ALTER TABLE `Fine` DISABLE KEYS */;
INSERT INTO `Fine` VALUES (125,56352,55542,'Veyangoda','Unpaid','Nittambuwa','2020-05-01','A',1500.00,'AB-8574','2020-06-01','2020-03-31','12:30:00'),(210,7896541,66666,'Kandy','Unpaid','Kandy','2020-05-01','A',3000.00,'CAE5742','2020-06-01','2020-04-12','09:30:00'),(300,7896541,124521,'Kandy','Paid','Kandy','2020-01-10','A',1500.00,'CAE5742','2020-03-01','2019-12-15','21:30:00');
/*!40000 ALTER TABLE `Fine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Offences`
--

DROP TABLE IF EXISTS `Offences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Offences` (
  `Fine_No` int(11) NOT NULL,
  `Offense` varchar(250) NOT NULL,
  `Offense_No` int(11) NOT NULL,
  PRIMARY KEY (`Offense_No`,`Fine_No`),
  UNIQUE KEY `Offences_UN` (`Fine_No`),
  CONSTRAINT `Offences_FK` FOREIGN KEY (`Fine_No`) REFERENCES `Fine` (`Fine_No`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Offences`
--

LOCK TABLES `Offences` WRITE;
/*!40000 ALTER TABLE `Offences` DISABLE KEYS */;
INSERT INTO `Offences` VALUES (125,'Speeding over 100kmh on highway',1),(300,'Parking on crosswalk',2),(210,'Crossing divider lines',3);
/*!40000 ALTER TABLE `Offences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Payments`
--

DROP TABLE IF EXISTS `Payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Payments` (
  `Bank_ID` int(11) NOT NULL,
  `License_No` int(11) NOT NULL,
  `Date` date DEFAULT NULL,
  `Time` time DEFAULT NULL,
  `Amount` decimal(7,2) NOT NULL,
  PRIMARY KEY (`License_No`,`Bank_ID`),
  KEY `Payments_FK_1` (`Bank_ID`),
  CONSTRAINT `Payments_FK` FOREIGN KEY (`License_No`) REFERENCES `Driver` (`License_No`),
  CONSTRAINT `Payments_FK_1` FOREIGN KEY (`Bank_ID`) REFERENCES `Bank` (`Bank_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Payments`
--

LOCK TABLES `Payments` WRITE;
/*!40000 ALTER TABLE `Payments` DISABLE KEYS */;
INSERT INTO `Payments` VALUES (78955,56352,'2019-12-30','15:30:00',5000.00),(98568,7896541,'2019-05-31','16:30:35',2500.50);
/*!40000 ALTER TABLE `Payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Police_Officer`
--

DROP TABLE IF EXISTS `Police_Officer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Police_Officer` (
  `Police_ID` int(11) NOT NULL,
  `Admin_ID` int(11) NOT NULL,
  `First_Name` varchar(25) DEFAULT NULL,
  `Last_Name` varchar(25) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Password` varchar(250) NOT NULL,
  PRIMARY KEY (`Police_ID`),
  KEY `Police_Officer_FK` (`Admin_ID`),
  CONSTRAINT `Police_Officer_FK` FOREIGN KEY (`Admin_ID`) REFERENCES `Admin` (`Admin_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Police_Officer`
--

LOCK TABLES `Police_Officer` WRITE;
/*!40000 ALTER TABLE `Police_Officer` DISABLE KEYS */;
INSERT INTO `Police_Officer` VALUES (55542,5,'Michael','Paul','jkpwl@gmail.com','$2b$10$mERwHx7ZL1IO1leZO/1xvOIRUw.o7djWgfE5JOUkTqqcUHcc/pGPC'),(58472,3,'Piu','Garfield','pgarfield@gmail.com','$2b$10$OuMDStL/rY9JfLR38UO0Y.YooH5YWYhk7AC6q1zICagoQjklhqXyO'),(66666,5,'Ayesh','Bandara','abandara@gmail.com','$2b$10$yTBIkQQ./0.wB9TcJa/5LuhOOHqKqVCfKFLmRpThmh1l2Tis/Ulza'),(124521,1,'Madduma','Bandara','mbandara@gmail.com','$2b$10$tvOvJJrroOdDxHLqdeL11ezNH49mhKSCXvsCxEsLf0QCZDwNAh0e.'),(9985754,1,'Asiri','Iroshan','airoshan@gmail.com','$2b$10$Z85/Fw4fvyjp7HPW9D3Tk.QUA2tTeKzRQZ8rO4UO4vWvnWf1zjlxi');
/*!40000 ALTER TABLE `Police_Officer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Vehical_Category`
--

DROP TABLE IF EXISTS `Vehical_Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Vehical_Category` (
  `License_No` int(11) NOT NULL,
  `Category` varchar(25) NOT NULL,
  `Description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Category`,`License_No`),
  KEY `Vehical_Category_FK` (`License_No`),
  CONSTRAINT `Vehical_Category_FK` FOREIGN KEY (`License_No`) REFERENCES `Driver` (`License_No`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vehical_Category`
--

LOCK TABLES `Vehical_Category` WRITE;
/*!40000 ALTER TABLE `Vehical_Category` DISABLE KEYS */;
INSERT INTO `Vehical_Category` VALUES (7896541,'D1','Passenger Buses'),(56352,'E','Heavy Weight Vehicles');
/*!40000 ALTER TABLE `Vehical_Category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-20 15:35:27
