const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  //   insert(offer) {
  //     return this.connection.query(
  //       `insert into ${this.table} (email, password) values (?, ?)`,
  //       [offer.email, offer.hashedPassword]
  //     );
  //   }

  //   findById(id) {
  //     return this.connection.query(
  //       `select id, avatar, email, civility, firstname, lastname, phone_number, created_at, role_id, information_id, address_id from ${this.table} where id = ?`,
  //       [id]
  //     );
  //   }

  //   update(offer) {
  //     return this.connection.query(
  //       `update ${this.table} set email = ?, civility = ?, phone_number = ?, lastname = ?, firstname = ? where id = ?`,
  //       [
  //         user.email,
  //         user.civility,
  //         user.phone_number,
  //         user.lastname,
  //         user.firstname,
  //         user.id,
  //       ]
  //     );
  //   }
}

module.exports = CompanyManager;
