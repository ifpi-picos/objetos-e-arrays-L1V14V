
const users = [];

export function addUser(name, email, password) {
    const user = {
        name,
        email,
        password
    };
    users.push(user);
    console.log(`Usuário ${name} adicionado.`);
}


export function removeUser(email) {
    const index = users.findIndex(user => user.email === email);
    if (index !== -1) {
        const removedUser = users.splice(index, 1);
        console.log(`Usuário ${removedUser[0].name} removido.`);
    } else {
        console.log(`Usuário com e-mail ${email} não encontrado.`);
    }
}


export function updateUser(email, newName, newPassword) {
    const user = users.find(user => user.email === email);
    if (user) {
        user.name = newName;
        user.password = newPassword;
        console.log(`Informações do usuário com e-mail ${email} atualizadas.`);
    } else {
        console.log(`Usuário com e-mail ${email} não encontrado.`);
    }
}


export function listUsers() {
    console.log('Lista de usuários:');
    users.forEach(user => {
        console.log(`Nome: ${user.name}, E-mail: ${user.email}`);
    });
}
