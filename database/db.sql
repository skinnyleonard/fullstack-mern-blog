create table blogs(
    id integer primary key auto_increment,
    name varchar(1000) not null,
    post varchar(1000) not null,
    done boolean not null default 0,
    createAt timestamp not null default current_timestamp
);
create table comments(
    id integer auto_increment,
    name varchar(800) not null,
    comment varchar(1000) not null,
    createAt timestamp primary key not null default current_timestamp,
    foreign key (id) references blogs (id)
);