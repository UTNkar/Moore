import * as React from 'react';

import { cj } from '../utils';

const DEFAULT_16_9_RATIO = 0.5617021276595745;

export function YouTubeVideo({
  className = '',
  title,
  videoId,
  aspectRatio = DEFAULT_16_9_RATIO,
  startAt = 0,
  showAllRelatedVideos = false,
  controls = true,
  autoplay = false,
  muted = false,
  privacyMode = false,
  ...props
}) {
  const baseUrl = privacyMode ? 'https://www.youtube-nocookie.com/embed' : 'https://www.youtube.com/embed';

  const urlParams = Object.entries({
    autoplay,
    controls,
    muted,
    showAllRelatedVideos,
    startAt,
  })
    .map(([k, v]) => `${k}=${Number(v)}`)
    .join('&');

  const iframeStyle = {
    height: '100%',
    left: 0,
    pointerEvents: 'auto',
    position: 'absolute',
    top: 0,
    width: '100%',
  };

  return (
    <div
      {...props}
      style={{ paddingTop: `${aspectRatio * 100}%` }}
      className={cj('w-embed-youtubevideo', className)}
    >
      <iframe
        src={`${baseUrl}/${videoId}?${urlParams}`}
        title={title}
        allowFullScreen
        scrolling="no"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={iframeStyle}
      />
    </div>
  );
}
