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
    "tourSchedule_id",
    "email",
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

function adultCountIsNumber(req, res, next) {
    const { adultCount } = req.body.data;

    if(!Number.isInteger(adultCount) || adultCount <= 0) {
        return next({
            status: 400,
            message: "adultCount must be a whole number greater than zero",
        });
    }

    next();
}

function childCountIsNumber(req, res, next) {
    const { childCount } = req.body.data;

    if(!Number.isInteger(childCount) || childCount < 0) {
        return next({
            status: 400,
            message: "childCount must be a whole number and cannot be negative",
        });
    }

    next();
}

function emailIsValid(req, res, next) {
    const { email } = req.body.data;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        return next({
            status: 400,
            message: "Email is invalid",
        })
    }

    next();
}

function addressIsValid(req, res, next) {
    const { address } = req.body.data;

    if(typeof address !== "string" || address.trim().length < 5 || address.trim().length > 255) {
        return next({
            status: 400,
            message: "Address must be between 5 and 255 characters",
        })
    }

    res.locals.address = address.trim();
    next();
}

function tourScheduleIdIsValid(req, res, next) {
    const tourSchedule_id = Number(req.body.data.tourSchedule_id);

    if(!Number.isInteger(tourSchedule_id) || tourSchedule_id <= 0) {
        return next({
            status: 400,
            message: "tourSchedule_id must be a positive whole number"
        });
    }

    req.body.data.tourSchedule_id = tourSchedule_id;
    next();
}

async function tourScheduleExists(req, res, next) {
    const { tourSchedule_id } = req.body.data;

    const schedule = await toursReservationsService.read(tourSchedule_id);

    if(!schedule) {
        return next({
            status: 400,
            message: `Tour schedule ${tourSchedule_id} does not exist`,
        })
    }

    res.locals.tourSchedule = schedule;
    next();
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
  create: [
    hasProperties,
    hasRequiredProperties,
    hasValidProperties,
    mobileIsNumber,
    addressIsValid,
    tourScheduleIdIsValid,
    tourScheduleExists,
    emailIsValid,
    childCountIsNumber,
    adultCountIsNumber,
    validMobileNumber,
    asyncErrorBoundary(create),
  ],
};