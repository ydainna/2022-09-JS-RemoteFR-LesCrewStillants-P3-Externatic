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
      `select id, email, password from ${this.table} where email = ?`,
      [email]
    );
  }

  findById(id) {
    return this.connection.query(
      `select id, avatar, email, civility, firstname, lastname, phone_number, created_at, role_id, information_id, address_id from ${this.table} where id = ?`,
      [id]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set email = ?, civility = ?, phone_number = ?, lastname = ?, firstname = ? where id = ?`,
      [
        user.email,
        user.civility,
        user.phone_number,
        user.lastname,
        user.firstname,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
