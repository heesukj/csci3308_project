create table if not exists `user`(
`list` varchar(40) not null,
`name` varchar(40) not null,
`userid` varchar(40) not null,
primary key (`list`)
);

create table if not exists `item`(
`itemid` varchar(40) not null,
`name` varchar(40) not null,
primary key (`itemid`)
);

insert into `item` (`itemid`, `name`) values ('1', 'test');

insert into `user` (`list`,`name`,`userid`) values ('test', 'tester', 'test1');
