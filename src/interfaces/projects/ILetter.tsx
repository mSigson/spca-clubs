import IProject from "interfaces/projects/IProject";

interface ILetter extends IProject {
  letter_recipient: string;
  description: string;
}

export default ILetter;
