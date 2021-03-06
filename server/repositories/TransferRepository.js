const knex = require("../database/knex");
const Transfer = require("../models/Transfer");
const BaseRepository = require("./BaseRepository");
const expect = require("expect-runtime");

class TransferRepository extends BaseRepository{

  constructor(){
    super("wallets.transfer");
  }

  async create(object){
    object.type = Transfer.TYPE.send;
    object.active = true;
    const result = await super.create(object);
    expect(result).match({
      id: expect.any(Number),
    });
    return result;
  }

  async getPendingTransfers(id){
    return await knex("wallets.transfer").where({
      destination_entity_id: id,
      state: Transfer.STATE.pending,
    });
  }
}

module.exports = TransferRepository;
