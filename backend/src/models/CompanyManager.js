const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  insert(company) {
    return this.connection.query(
      `insert into ${this.table} (name, sector, siret, logo, description, banner, link, contact_name, user_id, address_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        company.name,
        company.sector,
        company.siret,
        company.logo,
        company.description,
        company.banner,
        company.link,
        company.contact_name,
        company.user_id,
        company.address_id,
        company.id,
      ]
    );
  }

  findById(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  update(company) {
    return this.connection.query(
      `update ${this.table} set name = ?, sector = ?, siret = ?, logo = ?, description = ?, banner = ?, link = ?, contact_name = ?, user_id = ?, address_id = ? where id = ?`,
      [
        company.name,
        company.sector,
        company.siret,
        company.logo,
        company.description,
        company.banner,
        company.link,
        company.contact_name,
        company.user_id,
        company.address_id,
        company.id,
      ]
    );
  }

  deleteMulipleCompany(userId) {
    return this.connection.query(
      `delete from ${this.table} where user_id IN (?)`,
      [userId]
    );
  }
}

module.exports = CompanyManager;
