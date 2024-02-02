
exports.up = knex => knex.schema.createTable("tags", table =>  {
    table.increments("id");
    table.text("name").notNullable();

    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE");;
    table.integer("event_id").references("id").inTable("events").onDelete("CASCADE");
  });
  
  
  exports.down = knex => knex.schema.dropTable("tags");
  