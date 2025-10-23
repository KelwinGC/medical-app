INSERT INTO `freedb_db_medical`.`specialty` (`description`) VALUES ('Medicina General');
INSERT INTO `freedb_db_medical`.`specialty` (`description`) VALUES ('Medicina Interna');
INSERT INTO `freedb_db_medical`.`specialty` (`description`) VALUES ('Pediatria');
INSERT INTO `freedb_db_medical`.`specialty` (`description`) VALUES ('Ginecologia');
INSERT INTO `freedb_db_medical`.`specialty` (`description`) VALUES ('Gastrologia');
INSERT INTO `freedb_db_medical`.`specialty` (`description`) VALUES ('Traumatologia');


INSERT INTO `freedb_db_medical`.`medic` (`name`) VALUES ('Dra Maria Suarez');
INSERT INTO `freedb_db_medical`.`medic` (`name`) VALUES ('Dr Marcos Adama');
INSERT INTO `freedb_db_medical`.`medic` (`name`) VALUES ('Dra Karina Martins');
INSERT INTO `freedb_db_medical`.`medic` (`name`) VALUES ('Dr Cesa Sumaeta');
INSERT INTO `freedb_db_medical`.`medic` (`name`) VALUES ('Dra Marina Galvez');


INSERT INTO `freedb_db_medical`.`insure` (`insure_id`, `fullname`, `birthdate`) VALUES ('00001', 'Juan Perez Suarez', '1985/10/16');
INSERT INTO `freedb_db_medical`.`insure` (`insure_id`, `fullname`, `birthdate`) VALUES ('00002', 'Maria Gonzales Izquierdo', '1990/05/10');
INSERT INTO `freedb_db_medical`.`insure` (`insure_id`, `fullname`, `birthdate`) VALUES ('00003', 'Cesar Acuña Peralta', '1980/02/09');
INSERT INTO `freedb_db_medical`.`insure` (`insure_id`, `fullname`, `birthdate`) VALUES ('00004', 'Karina Fernandez Marquez', '2000/04/15');
INSERT INTO `freedb_db_medical`.`insure` (`insure_id`, `fullname`, `birthdate`) VALUES ('00005', 'Mario Menezes Diaz', '2002/07/21');

INSERT INTO `freedb_db_medical`.`center` (`name`) VALUES ('Sede San Isidro Lima');
INSERT INTO `freedb_db_medical`.`center` (`name`) VALUES ('Sede Miraflores Lima');
INSERT INTO `freedb_db_medical`.`center` (`name`) VALUES ('Sede Arequipa Arequipa');
INSERT INTO `freedb_db_medical`.`center` (`name`) VALUES ('Sede Lince Lima');
INSERT INTO `freedb_db_medical`.`center` (`name`) VALUES ('Sede Santiago de Surco Lima');

INSERT INTO `freedb_db_medical`.`schedule` (`center_id`, `specialty_id`, `medic_id`, `schedule_date`) VALUES ('1', '1', '1', '2025/10/20');
INSERT INTO `freedb_db_medical`.`schedule` (`center_id`, `specialty_id`, `medic_id`, `schedule_date`) VALUES ('1', '2', '2', '2025/10/21');
INSERT INTO `freedb_db_medical`.`schedule` (`center_id`, `specialty_id`, `medic_id`, `schedule_date`) VALUES ('1', '3', '3', '2025/10/22');
INSERT INTO `freedb_db_medical`.`schedule` (`center_id`, `specialty_id`, `medic_id`, `schedule_date`) VALUES ('1', '4', '4', '2025/10/23');
INSERT INTO `freedb_db_medical`.`schedule` (`center_id`, `specialty_id`, `medic_id`, `schedule_date`) VALUES ('1', '5', '5', '2025/10/24');

