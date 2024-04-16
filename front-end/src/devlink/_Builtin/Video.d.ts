import { Embed } from "../types";
type VideoProps = {
  className?: string;
  options: Embed.Video;
};
export declare function Video({
  className,
  options,
  ...props
}: VideoProps): any;
export {};
