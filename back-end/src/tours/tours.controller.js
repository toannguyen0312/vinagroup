const toursService = require("./tours.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

/**
 * List all tours
 */
async function list(req, res) {
  const data = await toursService.list();
  res.json({ data });
}

/**
 * Read a specific tour
 */
async function read(req, res) {
  const { tourId } = req.params;
  const data = await toursService.read(tourId);
  
  if (!data) {
    return res.status(404).json({ error: `Tour ${tourId} not found` });
  }
  
  res.json({ data });
}

/**
 * Create a new tour
 */
async function create(req, res) {
  const data = await toursService.create(req.body.data);
  res.status(201).json({ data });
}

/**
 * Update an existing tour
 */
async function update(req, res) {
  const updatedTour = {
    ...req.body.data,
    id: req.params.tourId,
  };
  
  const data = await toursService.update(updatedTour);
  res.json({ data });
}

/**
 * Delete a tour
 */
async function destroy(req, res) {
  const { tourId } = req.params;
  await toursService.destroy(tourId);
  res.sendStatus(204);
}

/**
 * Validation middleware to check if tour exists
 */
async function tourExists(req, res, next) {
  const { tourId } = req.params;
  const tour = await toursService.read(tourId);
  
  if (tour) {
    res.locals.tour = tour;
    return next();
  }
  
  next({ status: 404, message: `Tour ${tourId} cannot be found.` });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(tourExists), asyncErrorBoundary(read)],
  create: asyncErrorBoundary(create),
  update: [
    asyncErrorBoundary(tourExists),
    asyncErrorBoundary(update),
  ],
  destroy: [asyncErrorBoundary(tourExists), asyncErrorBoundary(destroy)],
};
