import app from './app';
import config from './config';

app.listen(config.PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${config.PORT}`);
});
