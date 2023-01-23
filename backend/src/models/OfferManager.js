const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(offer) {
    return this.connection.query(
      `insert into ${this.table} (title, job_description, type_of_contract, compensation, schedule, localisation, mission, seeked_profile, complementary_info, user_id, company_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        offer.title,
        offer.job_description,
        offer.type_of_contract,
        offer.compensation,
        offer.schedule,
        offer.localisation,
        offer.mission,
        offer.seeked_profile,
        offer.complementary_info,
        offer.user_id,
        offer.company_id,
        offer.id,
      ]
    );
  }

  findById(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  update(offer) {
    return this.connection.query(
      `update ${this.table} set title = ?, job_description = ?, type_of_contract = ?, compensation = ?, schedule = ?, localisation = ?, mission = ?, seeked_profile = ?, complementary_info = ? where id = ?`,
      [
        offer.title,
        offer.job_description,
        offer.type_of_contract,
        offer.compensation,
        offer.schedule,
        offer.localisation,
        offer.mission,
        offer.seeked_profile,
        offer.complementary_info,
        offer.id,
      ]
    );
  }
}

module.exports = UserManager;
