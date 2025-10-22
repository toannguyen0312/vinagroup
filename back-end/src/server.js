require('dotenv').config();

// Debug: Check if environment variables are loaded
console.log('🔧 Environment Check:');
console.log('   NODE_ENV:', process.env.NODE_ENV);
console.log('   PORT:', process.env.PORT);
console.log('   DATABASE_URL:', process.env.DATABASE_URL ? '✅ Loaded' : '❌ Missing');

const { PORT = 5001, NODE_ENV = 'development' } = process.env;

const app = require("./app");
const knex = require("./db/connection");

// Run database migrations first, then start server
knex.migrate
  .latest()
  .then((migrations) => {
    console.log("✅ Database migrations completed:", migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error("❌ Migration error:", error.message);
    console.error("💡 Make sure your DATABASE_URL is correct in .env file");
    knex.destroy();
    process.exit(1);
  });

function listener() {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📊 Environment: ${NODE_ENV}`);
  console.log(`🌐 API available at: http://localhost:${PORT}/api`);
}

// Graceful shutdown handlers
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  knex.destroy().then(() => {
    console.log('Database connection closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  knex.destroy().then(() => {
    console.log('Database connection closed.');
    process.exit(0);
  });
});