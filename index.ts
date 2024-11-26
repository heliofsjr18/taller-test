import express from 'express'
import * as service from './service/tasks.service'
var bodyParser = require('body-parser')

const getTaskService = new service.TasksService();

const app = express()

app.use(bodyParser.json({ type: 'application/json' }))

let urlencodedParser = bodyParser.urlencoded()

app.get('/', (_req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/tasks', (_req, res) => {
  const getResults = getTaskService.getTask();
  res.send(getResults);
});

app.post('/task', urlencodedParser, (_req, res) => {
  const getBody = _req?.body;
  const getResults = getTaskService.postNewTask(getBody);
  res.send(`included new ${JSON.stringify(getBody)}`);
});


const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
