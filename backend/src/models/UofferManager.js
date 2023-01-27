const AbstractManager = require("./AbstractManager");

class UofferManager extends AbstractManager {
  constructor() {
    super({ table: "user_offer" });
  }

  deleteMultipleUserOffer(userId) {
    return this.connection.query(
      `delete from ${this.table} where user_id IN (?) or consultant_id IN (?)`,
      [userId, userId]
    );
  }
}

module.exports = UofferManager;
