import express from 'express';
import "reflect-metadata";
import { connection } from './data-source';
import userRoutes from './routes/user.route';


(async () => {
  try {
    await connection.initialize();

    const app = express();

    app.use(express.json());
    app.use('/users', userRoutes);

    app.listen(8000, () => {
      console.log("connected successfully");
    });
  }
  catch ({message}) {
    console.log(message);
  }
})();