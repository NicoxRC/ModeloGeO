import config from '../config';

const epayco = require('epayco-sdk-node')({
  apiKey: config.PUBLIC_KEY_EPAYCO,
  privateKey: config.PRIVATE_KEY_EPAYCO,
  lang: 'ES',
  test: true,
});

export default epayco;
