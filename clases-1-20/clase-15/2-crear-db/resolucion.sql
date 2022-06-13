-- 1)

create dabatabe mibase;
use mibase;

-- 2)

create table usuarios(id int unsigned not null auto_increment, nombre varchar(50) not null,
apellido varchar(50) not null, edad int unsigned, email varchar(50) not null, primary key(id));

-- para corroborar tirar el siguiente select

select * from usuarios;

-- 3)

insert into usuarios (nombre, apellido, edad, email) values 
('Marcos', 'Villanueva', 23, 'marcosvillanueva@mimail.com'), 
('Agustin', 'Biancardi', 20, 'agustuturrito@gmail.com'), 
('Diego', 'Maradona', 60, 'eldiego@elmasgrande.com');

-- 4)

select * from usuarios;

-- 5)

delete from usuarios where id = 2;

-- 6)

update usuarios set edad = 24 where id = 1;

-- 7)

select * from usuarios;