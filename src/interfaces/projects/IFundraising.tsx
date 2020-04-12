import IProject from "interfaces/projects/IProject";

interface IFundraising extends IProject {
  raised: Number;
  method: String;
}

export default IFundraising;
