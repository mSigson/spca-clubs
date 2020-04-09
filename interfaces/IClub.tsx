import IUser from "./IUser";

interface IClub {
  name: string;
  age_range: {
    min: number;
    max: number;
  };
  num_of_members: number;
  advisors: IUser[];
  school: string;
  created_at?: Date;
}

export default IClub;
