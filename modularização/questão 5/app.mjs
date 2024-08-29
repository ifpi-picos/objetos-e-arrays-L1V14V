
import { addUser, removeUser, updateUser, listUsers } from './userDatabase.mjs';


addUser('Alice', 'alice@example.com', 'password123');
addUser('Bob', 'bob@example.com', 'password456');


listUsers();

updateUser('alice@example.com', 'Alice Wonderland', 'newpassword123');


listUsers();


removeUser('bob@example.com');


listUsers();
