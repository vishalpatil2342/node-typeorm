import { Request, Response } from "express";
import { connection } from "../data-source";

import { User } from "../entity/user.entity";

export const createUsers = async (req:Request,res:Response) => {
  const { firstname, lastname } = req.body;
  try {
    const user = await connection.getRepository(User).create({
      firstname,
      lastname
    });
    const result = await connection.getRepository(User).save(user);
    res.json(result);
    
  } catch (error) {
    if (error instanceof Error) {
      res.json(error.message);
    }
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {

    const users = await connection.getRepository(User).find();
    res.json(users);

  } catch (error) {
    if(error instanceof Error)
    res.json(error.message);
  }
}

export const updateUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: User | null = await connection.getRepository(User).findOneBy({
      id:parseInt(id),
    });

    if (!user) {
      return res.json({ msg: "user did not exists" });
    }
    const result =  await connection.getRepository(User).update({id:parseInt(id)},req.body);
    res.json(result);
  }
  catch (error) {
    if (error instanceof Error) {
      res.json(error.message);
    }
  }
}

export const getUserByid = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await connection.getRepository(User).findOneBy({
      id: parseInt(id)
    })
    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.json(error.message);
    }
  }
}



export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await connection.getRepository(User).delete(parseInt(id));
    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.json(error.message);
    }
  }
}