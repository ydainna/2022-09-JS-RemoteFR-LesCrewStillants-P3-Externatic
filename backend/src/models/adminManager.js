const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  deleteMultipleUserOffer(userId) {
    return this.connection.query(
      `delete from user_offer where user_id IN (?)`,
      [userId]
    );
  }

  deleteMultipleOffer(userId) {
    return this.connection.query(`delete from offer where user_id IN (?)`, [
      userId,
    ]);
  }

  deleteMulipleCompany(userId) {
    return this.connection.query(`delete from company where user_id IN (?)`, [
      userId,
    ]);
  }

  deleteMulipleUser(userId) {
    return this.connection.query(`delete from user where id IN (?)`, [userId]);
  }
}

module.exports = ItemManager;
