const tourScheduleData = require("./02-tour-schedule.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE \"tourSchedule\" RESTART IDENTITY CASCADE")
    .then(() => knex("tourSchedule").insert(tourScheduleData));
};