require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { pool } = require('./db');

(async () => {
  try {
    const schemaPath = path.join(__dirname, '../../sql/schema.sql');
    const sql = fs.readFileSync(schemaPath, 'utf-8');
    await pool.query(sql);
    console.log('Database initialized ✅');
    process.exit(0);
  } catch (err) {
    console.error('DB init failed:', err);
    process.exit(1);
  }
})();
