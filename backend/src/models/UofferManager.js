const AbstractManager = require("./AbstractManager");

class UofferManager extends AbstractManager {
  constructor() {
    super({ table: "user_offer" });
  }

  deleteMultipleUserOffer(userId) {
    return this.connection.query(
      `delete from ${this.table} where user_id IN (?)`,
      [userId]
    );
  }
}

module.exports = UofferManager;
