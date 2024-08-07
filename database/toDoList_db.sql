create table users (
    id int AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    passwd VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table tasks (
    id int AUTO_INCREMENT PRIMARY KEY,
    nameTask VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_done BOOLEAN DEFAULT FALSE,
    userId INT NOT NULL, FOREIGN KEY (userId) REFERENCES users(id)
);

insert into users (username, email, passwd) values ('Dark869', 'ing.victor97@gmail.com', SHA2('Nevulosa12.', 256));

insert into tasks (nameTask, description, created_at, modified_at, is_done, userId) values (
    'Tarea 1', 'Descripcion de la tarea 1', NOW(), NOW(), FALSE, 1
);


UPDATE tasks
SET description = 'Descripción actualizada', modified_at = NOW()
WHERE id = 1;