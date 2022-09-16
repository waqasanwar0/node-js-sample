const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

function SentryFunc(){

// or use es6 import statements
// import * as Sentry from '@sentry/node';

// or use es6 import statements
// import * as Tracing from '@sentry/tracing';

Sentry.init({
  dsn: "https://ddca4d4da97147f19a791bfdc5299697@o1410025.ingest.sentry.io/6747050",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
}
module.exports = {SentryFunc}