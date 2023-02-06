import { IncomingMessage } from 'http';

const config = {
  url: (req?: IncomingMessage): string => {
    if (req) {
      return `${req.headers['x-forwarded-proto'] || 'http'}://${
        req.headers.host
      }`;
    }
    return window.location.origin;
  },
};

export default config;
