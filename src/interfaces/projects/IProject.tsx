import IClub from "interfaces/IClub";

interface IProject {
  _id: string;
  name: string;
  animal_group: string;
  animal_issue: string;
  type: string;
  learning_outcome: string;
  club: string | IClub;
  created_at: Date;
}

export default IProject;
