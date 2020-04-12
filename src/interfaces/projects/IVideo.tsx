import IProject from "interfaces/projects/IProject";

interface IVideo extends IProject {
  audience?: string;
  video_link?: string;
}

export default IVideo;
