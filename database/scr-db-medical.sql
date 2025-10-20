/*
CREATE DATABASE IF NOT EXISTS db_medical
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;center

USE db_medical;
*/
/*
CREATE DATABASE IF NOT EXISTS db_medical_cl
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE db_medical_cl;
*/

create table insure(
 insure_id char(5) primary key ,
 fullname varchar(200),
 birthdate timestamp
);

create table specialty(
 specialty_id int primary key auto_increment,
 description varchar(200)
);

create table center(
 center_id int primary key auto_increment,
 `name` varchar(200)
);

create table medic(
 medic_id int primary key auto_increment,
 `name` varchar(200)
);

-- drop table `schedule`
create table `schedule`(
 schedule_id int primary key auto_increment,
 center_id int,
 specialty_id int, 
 medic_id int, 
 schedule_date timestamp,
  FOREIGN KEY (center_id) REFERENCES `center`(center_id),
  FOREIGN KEY (specialty_id) REFERENCES `specialty`(specialty_id),
  FOREIGN KEY (medic_id) REFERENCES `medic`(medic_id)
);


-- drop table appointment
create table appointment(
 appointment_id int primary key auto_increment,
 schedule_id int,
 insure_id char(5),
 `status` char(20),
 FOREIGN KEY (schedule_id) REFERENCES `schedule`(schedule_id),
 FOREIGN KEY (insure_id) REFERENCES `insure`(insure_id)
);



