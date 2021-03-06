import fs from'fs';
import moment from 'moment';
import winston from 'winston';

const dir = './logs/';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

winston.emitErrs = true;

const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'debug',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
      json: false,
      prettyPrint: true,
      timestamp: ()=> moment().format('YYYY-MM-DD HH:mm Z'),
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      prettyPrint: true,
    }),
  ],
  exitOnError: false,
});

logger.stream = {
  write: (message)=> {
    logger.info(message);
  },
};

export default logger;
