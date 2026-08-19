const toursReservationsService = require("./toursReservations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const VALID_PROPERTIES =[
    "tourReservation_id",
    "tourSchedule_id",
    "adultCount",
    "childCount",
    "name",
    "mobile_number",
    "email",
    "address",
    "created_at",
    "updated_at",
];

function hasValidProperties(req, res, next) {
    const { data = {} } = req.body;

    const invalidColumns = Object.keys(data).filter(
        (column) => !VALID_PROPERTIES.includes(column)
    );

    if(invalidColumns.length) {
        return next({
            status: 400,
            message: `Invalid column(s): ${invalidColumns.join(", ")}`,
        })
    }
    next();
}

function hasProperties(...properties) {
    return function(req, res, next) {
        const { data = {} } = req.body;

        try{
            properties.forEach((property) => {
                if(!data[property]) {
                    const error = new Error(`A ${property} property is required`);
                    error.status = 400;
                    throw error;
                }
            });
            next();
        } catch(error) {
            next(error);
        }
    };
}

async function list(req, res) {
  const data = await toursReservationsService.list();
  res.json({ data });
}

async function create(req, res) {
  const data = await toursReservationsService.create(req.body.data);
  res.status(201).json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: asyncErrorBoundary(create),
};