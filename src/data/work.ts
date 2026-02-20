export interface WorkItem {
  title: string;
  link: string;
  youtubeId?: string;
  thumbnail?: string;
}

export const workItems: WorkItem[] = [
  {
    title: 'NFL',
    link: 'https://www.youtube.com/watch?v=dk9xuOUS0zg',
    youtubeId: 'dk9xuOUS0zg',
  },
  {
    title: 'TOHO STUDIOS',
    link: 'https://www.youtube.com/watch?v=7sc99j8tOgQ',
    youtubeId: '7sc99j8tOgQ',
  },
  {
    title: 'Tohji - Aglio e olio',
    link: 'https://www.youtube.com/watch?v=MIBqS9kcDg0',
    youtubeId: 'MIBqS9kcDg0',
  },
  {
    title: 'Urban Night Drift',
    link: 'https://example.com/work/urban-night-drift',
    thumbnail: 'https://placehold.co/1280x720/151515/f0f0f0?text=Urban+Night+Drift',
  },
  {
    title: 'Tokyo Rooftop Sequence',
    link: 'https://example.com/work/tokyo-rooftop-sequence',
    thumbnail: 'https://placehold.co/1280x720/161616/f0f0f0?text=Tokyo+Rooftop+Sequence',
  },
  {
    title: 'Automotive Launch Film',
    link: 'https://example.com/work/automotive-launch-film',
    thumbnail: 'https://placehold.co/1280x720/171717/f0f0f0?text=Automotive+Launch+Film',
  },
  {
    title: 'Coastal FPV One Take',
    link: 'https://example.com/work/coastal-fpv-one-take',
    thumbnail: 'https://placehold.co/1280x720/191919/f0f0f0?text=Coastal+FPV+One+Take',
  },
  {
    title: 'Night Market Story',
    link: 'https://example.com/work/night-market-story',
    thumbnail: 'https://placehold.co/1280x720/1b1b1b/f0f0f0?text=Night+Market+Story',
  },
];
