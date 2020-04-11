import IUser from "interfaces/IUser";
import IPetition from "interfaces/projects/IPetition";

interface IClub {
  name: string;
  avatar: string;
  age_range: {
    min: number;
    max: number;
  };
  num_of_members: number;
  advisors: IUser[];
  projects: { petitions: IPetition[] };
  school: string;
  created_at: Date;
}

export default IClub;
