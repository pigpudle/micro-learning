const DYNO_AWAKE_INTERVAL = 1000 * 60 * 5; // every 5 mins
const SCHEDULER_INTERVAL_IN_MIN = +process.env.DISABLE_PUSH_TIME_RESTRICTIONS
  ? 1
  : 30;
const PUSH_LIFETIME_IN_SECONDS = 60 * 60 * 24; // one day
const DEFAULT_APP_PORT = 3000;
const BASE_URL = "/api";

module.exports = {
  DYNO_AWAKE_INTERVAL,
  SCHEDULER_INTERVAL_IN_MIN,
  PUSH_LIFETIME_IN_SECONDS,
  DEFAULT_APP_PORT,
  BASE_URL,
};
