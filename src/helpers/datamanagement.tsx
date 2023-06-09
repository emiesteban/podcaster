import {
  type EpisodeListProps,
  type EpisodeProps,
  type PodcastListProps,
  type PodcastProps,
} from '../types/index';

export const assemblePodcastList = (listPodcast: any): PodcastListProps => {
  const newPodcastList: PodcastProps[] = [];
  listPodcast?.feed?.entry?.forEach((podcast: any) => {
    newPodcastList.push({
      id: podcast?.id?.attributes?.['im:id'],
      image: podcast?.['im:image']?.[(podcast?.['im:image']).length - 1]?.label,
      name: podcast?.['im:name']?.label,
      artist: podcast?.['im:artist']?.label,
      summary: podcast?.summary?.label,
    });
  });
  return { list: newPodcastList, timestamp: Date.now() };
};

export const assembleEpisodeList = (listEpisode: any): EpisodeListProps => {
  const newEpisodeList: EpisodeProps[] = [];
  listEpisode?.results?.forEach((episode: any) => {
    newEpisodeList.push({
      trackId: episode?.trackId,
      trackName: episode?.trackName,
      releaseDate: episode?.releaseDate,
      trackTimeMillis: episode?.trackTimeMillis,
      previewUrl: episode?.previewUrl,
      description: episode?.description,
    });
  });
  return {
    list: newEpisodeList,
    timestamp: Date.now(),
    resultsCount: newEpisodeList.length,
  };
};
