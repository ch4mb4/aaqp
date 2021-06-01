CREATE DATABASE `aaqp` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `requerimiento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `apellidos` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `nombreSolicitud` varchar(255) DEFAULT NULL,
  `descripcionSolicitud` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
