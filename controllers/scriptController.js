const pool = require('../config/db');

exports.getAllScripts = async (req, res) => {
  const result = await pool.query('SELECT * FROM scripts');
  res.json(result.rows);
};

exports.createScript = async (req, res) => {
  const { title, content } = req.body;
  const result = await pool.query('INSERT INTO scripts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
  res.json(result.rows[0]);
};
