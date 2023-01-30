const AbstractManager = require("./AbstractManager");

class UOfferManager extends AbstractManager {
  constructor() {
    super({ table: "user_offer" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  favorite(uoffer) {
    return this.connection.query(
      `insert into ${this.table} (isFavorite, isApplied, user_id, offer_id, consultant_id) values (?, ?, ?, ?, ?)`,
      [
        uoffer.isFavorite,
        uoffer.isApplied,
        uoffer.user_id,
        uoffer.offer_id,
        uoffer.consultant_id,
      ]
    );
  }

  delete(id, offer) {
    return this.connection.query(
      `delete from ${this.table} where user_id = ? and offer_id = ?`,
      [id, offer]
    );
  }

  findById(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = UOfferManager;
