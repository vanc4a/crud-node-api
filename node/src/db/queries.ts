export default {
    getById: 'SELECT * FROM users WHERE id = ?',
    allUsers: 'SELECT * FROM users',
    delete: 'DELETE * FROM users WHERE id = ?',
    create: 'INSERT INTO users(username,age,hobbies,id) VALUES(?,?,?,?)',
    update: 'UPDATE users set token = ? WHERE login = ?',
  };