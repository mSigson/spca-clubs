import IClub from "interfaces/IClub";

interface IProject {
  _id: string;
  name: string;
  animal_group: string;
  animal_issue: string;
  type: string;
  club: string | IClub;
}

export default IProject;
