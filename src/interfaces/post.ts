export interface IPost {
  id: string;
  userInfo: {
    name: string;
    image: string;
  };
  songContent: {
    song: string;
    album: string;
    albumImage: string;
  };
  description: string;
}
