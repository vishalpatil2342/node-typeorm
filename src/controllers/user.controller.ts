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
    
  } catch ({message}) {
    res.status(404).json(message);
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {

    const users = await connection.getRepository(User).find();
    res.json(users);

  } catch ({message}) {
    res.json(message);
  }
}

export const updateUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstname, lastname } = req.body;
  try {
    const user = await User.findOneBy({ id: parseInt(id) });
    

    if (!user) {
      return res.json("user not found");
    }

    user.firstname = firstname;
    user.lastname = lastname;
    await user.save();
    res.json(user);

  }
  catch ({ message }) {
    res.json(message);
  }
}


export const getUserByid = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await connection.getRepository(User).findOneBy({
      id: parseInt(id)
    })
    res.json(user);
  } catch ({ message }) {
    res.json(message);
  }
}



export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.delete({id:parseInt(id)});
    res.json(user);
  } catch ({ message }) {
    res.json(message);
  }
}