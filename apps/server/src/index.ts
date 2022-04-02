import app from './app';
import './databaseConnection';

const PORT = app.get('port');

app.listen(PORT, () => {
  console.log(`server is running at: http://localhost:${PORT}`);
});
