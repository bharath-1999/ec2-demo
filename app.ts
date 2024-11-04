import express, {
    Request,
    Response,
  } from "express";

const app  = express();



app.get("/", (req: Request, res: Response) => {
    res
      .status(200)
      .send(
        'Your node project is successfully hosted on ec2.'
      );
  });
  

  app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});