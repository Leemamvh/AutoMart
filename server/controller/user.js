let users = [];
import uuid from 'uuid/v1';

export const createUser = (req, res) => {
  const { firstname , lastname,email,phoneNumber,password} = req.body;

  const newUser = {
    firstname,
    id: uuid(),
    lastname,
    email,
    phoneNumber,
    password
  }
  users.push(newUser);
  return res.status(201).send(users)
}

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.filter(user => user.id === id)

  return res.status(200).send(foundUser)
}