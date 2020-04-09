import IClub from "./IClub";

interface ISchool {
  name: string;
  address: string;
  clubs: [IClub];
  created_at: Date;
}

export default ISchool;
