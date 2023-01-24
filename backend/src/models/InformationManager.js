const AbstractManager = require("./AbstractManager");

class InformationManager extends AbstractManager {
  constructor() {
    super({ table: "information" });
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

module.exports = InformationManager;
