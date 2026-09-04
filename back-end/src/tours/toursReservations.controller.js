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

const hasRequiredProperties = hasProperties(
    "adultCount",
    "childCount",
    "name",
    "mobile_number",
    "address",
    "name",
);

function validMobileNumber(req, res, next) {
    const { mobile_number } = req.body.data;
    const isPhoneNumber = /^(?:\+84|84|0)(3|5|7|8|9)\d{8}$/.test(mobile_number);

    if(isPhoneNumber) {
        return next();
    } else {
        next({
            status: 400,
            message: `Vui lòng nhập đúng số điện thoại`,
        })
    }
}

function mobileIsNumber(req, res, next) {
    const { mobile_number } = req.body.data;
    const inputArray = [];

    mobile_number.split("").forEach(character => {
        if(Number(character)) {
            inputArray.push(character);
        }
    });

    const testString = inputArray.join('');

    const isNumber = Number(testString);

    if(isNumber) {
        return next();
    } else {
        next({
            status:400,
            message: `Vui lòng nhập đúng số điện thoại`,
        })
    }
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