create table blogs(
    id integer primary key auto_increment,
    name varchar(1000) not null,
    post varchar(1000) not null,
    done boolean not null default 0,
    createAt timestamp not null default current_timestamp
);
