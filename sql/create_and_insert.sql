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

create table if not exists listitem(
  listid varchar(30) not null,
  itemid varchar(30) not null,
  quantity int(4) not null,
  state boolean not null default '0',
  primary key (listid, itemid)
);

insert into listitem(listid, itemid, quantity) values
  ('3', '23', 10),
  ('5', '13', 5);



create table if not exists list (
  listid varchar(30) not null,
  name varchar(30) not null,
  state boolean not null default '0',
  primary key (listid)
);

insert into list (listid, name) values
  ('1', 'apple'),
  ('2', 'banana');

