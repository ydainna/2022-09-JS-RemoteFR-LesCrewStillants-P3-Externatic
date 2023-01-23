const AbstractManager = require("./AbstractManager");

class AddressManager extends AbstractManager {
  constructor() {
    super({ table: "address" });
  }

  insert() {
    return this.connection.query(`insert into ${this.table} () values ()`, []);
  }

  // update(item) {
  //   return this.connection.query(
  //     `update ${this.table} set title = ? where id = ?`,
  //     [item.title, item.id]
  //   );
  // }
}

module.exports = AddressManager;
