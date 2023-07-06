import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DataFileInterface {
  id?: string;
  name: string;
  content: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DataFileGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  user_id?: string;
}
