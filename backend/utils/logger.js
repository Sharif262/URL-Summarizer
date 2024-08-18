const { createLogger, format, transports } = require('winston');
const path = require('path');

// Create a logger instance with specific settings
const logger = createLogger({
    level: 'info',  // Minimum level of logs to capture
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),  // Add timestamp to each log
        format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
    ),
    transports: [
        new transports.File({ filename: path.join(__dirname, '../logs/app.log'), level: 'info' }),
        new transports.Console({ level: 'debug' })  // Also log to the console
    ],
});

module.exports = logger;
