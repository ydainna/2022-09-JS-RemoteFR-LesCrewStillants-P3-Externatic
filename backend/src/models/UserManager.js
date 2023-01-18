const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (email, password) values (?, ?)`,
      [user.email, user.hashedPassword]
    );
  }

  findByEmail(email) {
    return this.connection.query(
      `select email from ${this.table} where email = ?`,
      [email]
    );
  }
}

module.exports = UserManager;
