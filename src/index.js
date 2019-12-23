import app from './service/app';
import { SERVER_PORT } from './util/constants';

app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`);
});
