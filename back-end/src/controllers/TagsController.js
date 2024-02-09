const knex = require("../database/knex")

class tagsController{
    async index(request, response) { //! List all tags
        const user_id = request.user.id;

        const tags = await knex("tags")
        .where({ user_id })

        return response.json(tags);
    }

}

module.exports = tagsController;