import Raven from 'raven-js';

const ErrorLogger = {
  log: (error, context) => {
    if (process.env.NODE_ENV !== 'production'){
      console.error({
        error,
        context,
      })
    } else {
      if (!Raven.isSetup()) { Raven.config('https://92c434e914bb4e94aa6812146f2a65d2@sentry.io/203760').install(); }
      Raven.captureException(error, {
        extra: context
      });
    }
  }
}

export default ErrorLogger;
