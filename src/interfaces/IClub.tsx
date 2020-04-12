import IUser from "interfaces/IUser";
import IPetition from "interfaces/projects/IPetition";
import ILetter from "interfaces/projects/ILetter";
import IVideo from "interfaces/projects/IVideo";
import IDisplay from "interfaces/projects/IDisplay";
import IFundraising from "interfaces/projects/IFundraising";
import IPoster from "interfaces/projects/IPoster";

interface IClub {
  name: string;
  avatar: string;
  age_range: {
    min: number;
    max: number;
  };
  num_of_members: number;
  advisors: IUser[];
  projects: {
    petitions: IPetition[];
    letters: ILetter[];
    videos: IVideo[];
    posters: IPoster[];
    displays: IDisplay[];
    fundraisings: IFundraising[];
  };
  school: string;
  created_at: Date;
}

export default IClub;
