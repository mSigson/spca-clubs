import IProject from "interfaces/projects/IProject";

interface IPoster extends IProject {
  post_location: String;
  goal: String;
}

export default IPoster;
