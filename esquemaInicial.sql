create table contato(
    idcontato integer not null primary key autoincrement,
    nome varchar(255) not null,
    telefone varchar(9),
    datacriacaoContato timestamp not null default current_timestamp

);