import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

/*
============================================================
 MySQL Connection Pool Configuration
============================================================

- Uses environment variables from .env
- Uses connection pooling (better performance)
- Safe for production
*/

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,

  // Fail connection attempt after 10 seconds
  connectTimeout: 10000
});


/*
============================================================
 Test Database Connection
------------------------------------------------------------
 Used in:
 - /api/health/detailed
 - Startup verification
============================================================
*/
export async function testDatabaseConnection() {
  let connection;

  try {
    connection = await pool.getConnection();
    await connection.query("SELECT 1");
    return true;

  } finally {
    if (connection) connection.release();
  }
}


/*
============================================================
 Verify Database On Server Startup
------------------------------------------------------------
 - Attempts DB connection when server starts
 - Logs success or failure
 - Does NOT crash server (safe mode)
 - Can be modified to fail-fast in production
============================================================
*/
export async function verifyDatabaseOnStartup() {
  try {
    await testDatabaseConnection();
    console.log("✅ Database connection established successfully.");

  } catch (error) {
    console.error("❌ Database connection failed.");
    console.error("Reason:", error.message);

    // If you want production fail-fast behavior,
    // uncomment the next line:
    // process.exit(1);
  }
}


/*
============================================================
 Export Pool (Used Across Application)
============================================================
*/
export default pool;