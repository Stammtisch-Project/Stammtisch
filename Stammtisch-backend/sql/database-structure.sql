create database if not exists stammtisch;
use stammtisch;

drop table if exists users;
create table users (
	username varchar(255) primary key,
	first_name varchar(255) not null,
	last_name varchar(255) not null
);

drop table if exists friends;
create table friends (
	user1 varchar(255) not null references users(username),
	user2 varchar(255) not null references users(username),
	primary key (user1, user2)
);
