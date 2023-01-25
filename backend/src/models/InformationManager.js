const AbstractManager = require("./AbstractManager");

class InformationManager extends AbstractManager {
  constructor() {
    super({ table: "information" });
  }

  findById(id) {
    return this.connection.query(
      `select cv, actual_situation, isRemote, isActiveSearch, job, technology, type_of_contract, start_date, localisation_job from ${this.table} where id = ?`,
      [id]
    );
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
