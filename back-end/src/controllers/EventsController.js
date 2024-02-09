const knex = require("../database/knex");

class EventsController {
  async create(request, response) {
    //! Create new event
    const { title, description, location, date, time, tags } = request.body;
    const user_id  = request.user.id;

    const [event_id] = await knex("events").insert({
      title,
      description,
      location,
      date,
      time,
      user_id,
    });

    const tagsInsert = tags.map((name) => {
      return {
        event_id,
        name,
        user_id,
      };
    });
    await knex("tags").insert(tagsInsert);

    response.json();
  }

  async show(request, response) {
    //! Show an event
    const { event_id } = request.params;

    const event = await knex("events").where({ id: event_id }).first();
    const tags = await knex("tags").where({ event_id }).orderBy("name");

    return response.json({
      ...event,
      tags,
    });
  }

  async delete(request, response) {
    //! Delete an event
    const { event_id } = request.params;

    await knex("events").where({ id: event_id }).delete();

    return response.json();
  }

  async index(request, response) {
    //! List all events of the day with their tags
    const { date, tags } = request.query;
    const user_id = request.user.id;

    let events;

    if (tags) {
        const filterTags = tags.split(',').map(tag => tag.trim());

        events = await knex("tags")
        .select([
            "events.id",
            "events.title",
            "events.user_id",
        ])
        .where("events.user_id", user_id)
        .whereIn("name", filterTags)
        .innerJoin("events", "events.id", "tags.event_id")
        .orderBy("events.title")

    } else {
      events = await knex("events")
      .where({ user_id, date })
      .orderBy("title");
    }

    //! Join events with tags
    const userTags = await knex("tags").where({ user_id });
    const eventsWithTags = events.map(event => {
      const eventTags = userTags.filter(tag => tag.event_id === event.id);

      return {
        ...event,
        tags: eventTags
      }
    })

    return response.json(eventsWithTags);
  }
}

module.exports = EventsController;
