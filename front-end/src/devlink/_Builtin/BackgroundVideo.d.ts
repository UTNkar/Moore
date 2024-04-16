import React from "react";
type BackgroundVideoWrapperProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  sources?: string[];
  posterImage?: "";
  autoPlay?: boolean;
  loop?: boolean;
  children?: React.ReactElement<BackgroundVideoPlayPauseButtonProps>;
};
export declare const BackgroundVideoWrapper: ({
  tag,
  className,
  autoPlay,
  loop,
  sources,
  posterImage,
  children,
}: BackgroundVideoWrapperProps) => any;
type BackgroundVideoPlayPauseButtonProps = {
  className?: string;
  children: React.ReactElement<
    | BackgroundVideoPlayPauseButtonPlayingProps
    | BackgroundVideoPlayPauseButtonPausedProps
  >[];
};
export declare const BackgroundVideoPlayPauseButton: ({
  children,
  className,
}: BackgroundVideoPlayPauseButtonProps) => any;
type BackgroundVideoPlayPauseButtonPlayingProps = {
  children: React.ReactNode;
};
export declare const BackgroundVideoPlayPauseButtonPlaying: ({
  children,
}: BackgroundVideoPlayPauseButtonPlayingProps) => any;
type BackgroundVideoPlayPauseButtonPausedProps = {
  children: React.ReactNode;
};
export declare const BackgroundVideoPlayPauseButtonPaused: ({
  children,
}: BackgroundVideoPlayPauseButtonPausedProps) => any;
export {};
