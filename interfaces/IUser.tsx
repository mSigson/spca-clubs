interface IUser {
  user_id: string;
  name: string;
  given_name?: string;
  family_name?: string;
  nickname?: string;
  picture?: string;
  locale: "en";
  created_at: Date;
}

export default IUser;
