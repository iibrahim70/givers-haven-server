import { IUsers } from '../interfaces/users.interface';
import { Users } from '../models/users.model';

const createUsersFromDB = async (usersData: IUsers) => {
  const result = Users.create(usersData);
  return result;
};

export const UsersServices = {
  createUsersFromDB,
};