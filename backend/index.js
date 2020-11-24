import express from 'express';
import path from 'path';
import logger from 'morgan';

const app = express();


app.set('port', process.env.PORT || '8001');

app.use(logger('dev'));
app.use('/', express.static(path.resolve(__dirname, 'assets')));

app.listen(app.get('port'), () => {
  console.log('server running');
});