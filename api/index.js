import express from 'express';
import { handler } from './app/build/handler'
const app = express();

// your beautiful code...
app.use(handler);

app.listen(3000);

export const viteNodeApp = app;