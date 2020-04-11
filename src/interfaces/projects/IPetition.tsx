import IProject from "interfaces/projects/IProject";

interface IPetition extends IProject {
  petition_title: string;
  num_of_signatures: number;
  description: string;
}

export default IPetition;
