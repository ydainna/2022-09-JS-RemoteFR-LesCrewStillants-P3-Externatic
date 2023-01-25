const AbstractManager = require("./AbstractManager");

class AddressManager extends AbstractManager {
  constructor() {
    super({ table: "address" });
  }

  findById(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert() {
    return this.connection.query(`insert into ${this.table} () values ()`, []);
  }

  update(address) {
    return this.connection.query(
      `update ${this.table} set number_address = ?, street_name = ?, zipcode = ?, city = ?, country = ?, complementary_info = ? where id = ?`,
      [
        address.number_address,
        address.street_name,
        address.zipcode,
        address.city,
        address.country,
        address.complementary_info,
        address.id,
      ]
    );
  }
}

module.exports = AddressManager;
