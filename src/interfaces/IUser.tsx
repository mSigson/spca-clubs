import IClub from "./IClub";

interface IUser {
  user_id: string;
  name: string;
  given_name?: string;
  family_name?: string;
  nickname?: string;
  email: string;
  picture?: string;
  clubs: Partial<IClub>[];
  locale: "en";
  created_at: Date;
}

export default IUser;
