const tourScheduleService = require("./tourSchedule.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/**
 * List all tour schedules
 */
async function list(req, res) {
  const data = await tourScheduleService.list();
  res.json({ data });
}

/**
 * Read a specific tour schedule
 */
async function read(req, res) {
  const { tourScheduleId } = req.params;
  const data = await tourScheduleService.read(tourScheduleId);
  
  if (!data) {
    return res.status(404).json({ error: `Tour schedule ${tourScheduleId} not found` });
  }
  
  res.json({ data });
}

/**
 * Create a new tour schedule
 */
async function create(req, res) {
  const data = await tourScheduleService.create(req.body.data);
  res.status(201).json({ data });
}

/**
 * Update an existing tour schedule
 */
async function update(req, res) {
  const updatedTourSchedule = {
    ...req.body.data,
    id: req.params.tourScheduleId,
  };
  
  const data = await tourScheduleService.update(updatedTourSchedule);
  res.json({ data });
}

/**
 * Delete a tour schedule
 */
async function destroy(req, res) {
  const { tourScheduleId } = req.params;
  await tourScheduleService.destroy(tourScheduleId);
  res.sendStatus(204);
}

/**
 * Validation middleware to check if tour schedule exists
 */
async function tourScheduleExists(req, res, next) {
  const { tourScheduleId } = req.params;
  const tourSchedule = await tourScheduleService.read(tourScheduleId);
  
  if (tourSchedule) {
    res.locals.tourSchedule = tourSchedule;
    return next();
  }
  
  next({ status: 404, message: `Tour schedule ${tourScheduleId} cannot be found.` });
}

/**
 * Validation middleware for required fields
 */
function hasValidFields(req, res, next) {
  const { data = {} } = req.body;
  const requiredFields = ["tour_id", "ngayXuatPhat", "ngayKetThuc", "giaTien"];
  
  for (const field of requiredFields) {
    if (!data[field]) {
      return next({ status: 400, message: `Tour schedule must include a ${field}` });
    }
  }
  
  // Validate date format
  const startDate = new Date(data.ngayXuatPhat);
  const endDate = new Date(data.ngayKetThuc);
  
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return next({ status: 400, message: "Invalid date format" });
  }
  
  if (startDate >= endDate) {
    return next({ status: 400, message: "End date must be after start date" });
  }
  
  // Validate price is a number
  if (isNaN(parseFloat(data.giaTien))) {
    return next({ status: 400, message: "Price must be a valid number" });
  }
  
  next();
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(tourScheduleExists), asyncErrorBoundary(read)],
  create: [hasValidFields, asyncErrorBoundary(create)],
  update: [
    asyncErrorBoundary(tourScheduleExists),
    hasValidFields,
    asyncErrorBoundary(update),
  ],
  destroy: [asyncErrorBoundary(tourScheduleExists), asyncErrorBoundary(destroy)],
};
