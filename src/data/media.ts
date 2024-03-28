export interface Media {
  id: string;
  name: string;
  // artist or publisher
  creator: string;
  genre: string;
  imageUrl: string;
  url: string;
  type: "track" | "episode";
  duration: number; // in ms
  previewUrl: string;
  favorited: boolean;
}

export const mediaList: Media[] = [
  {
    id: "0EcQcdcbQeVJn9fknj44Be",
    name: "I Like Me Better",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273bdea30b86b37142ec99deb78",
    url: "https://open.spotify.com/track/0EcQcdcbQeVJn9fknj44Be",
    type: "track",
    creator: "Lauv",
    genre: "pop",
    duration: 197436,
    previewUrl:
      "https://p.scdn.co/mp3-preview/57bf51d254e2e01819ec8e013f4ed1c1fff8e50e?cid=2aca6730af4f4265a9834239348b9a1d",
    favorited: false,
  },
  {
    id: "4Dvkj6JhhA12EX05fT7y2e",
    name: "As It Was",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0",
    url: "https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e",
    type: "track",
    creator: "Harry Styles",
    genre: "pop",
    duration: 167303,
    previewUrl:
      "https://p.scdn.co/mp3-preview/c43dd07043b29e800c1a65b3a0102861fa3cf418?cid=2aca6730af4f4265a9834239348b9a1d",
    favorited: false,
  },
  {
    id: "62Lv9WcrfzJqhvYDbilJy3",
    name: "たぶん",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b2737b7d90956f81e0cc3f39d0b8",
    url: "https://open.spotify.com/track/62Lv9WcrfzJqhvYDbilJy3",
    type: "track",
    creator: "YOASOBI",
    genre: "pop",
    duration: 258666,
    previewUrl:
      "https://p.scdn.co/mp3-preview/97fb8aabf4b0a0eea5b7ea72690ebd33a5a273a2?cid=2aca6730af4f4265a9834239348b9a1d",
    favorited: false,
  },
  {
    id: "5nEPbvkG5ZSaZvq7u0SBWX",
    name: "Après un rêve",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b273b7c0ca07ce1b69f7c940fef9",
    url: "https://open.spotify.com/track/5nEPbvkG5ZSaZvq7u0SBWX",
    type: "track",
    creator: "Janine Jansen",
    genre: "classical",
    duration: 206040,
    previewUrl:
      "https://p.scdn.co/mp3-preview/d60c717e920c0add3808c3a4fcac5300adce9e05?cid=2aca6730af4f4265a9834239348b9a1d",
    favorited: false,
  },
  {
    id: "1jcQ040aWKeiUGJ2IcnFtV",
    name: "Sunset Bird",
    type: "track",
    creator: "Yiruma",
    genre: "classical",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b2733d06c7c46c4ea81795bb4b05",
    url: "https://open.spotify.com/track/1jcQ040aWKeiUGJ2IcnFtV",
    duration: 191000,
    previewUrl:
      "https://p.scdn.co/mp3-preview/2a8a1534ab648f9415cb5ebc8823ff57547b1af9?cid=2aca6730af4f4265a9834239348b9a1d",
    favorited: false,
  },
  {
    id: "1Qrg8KqiBpW07V7PNxwwwL",
    name: "Kill Bill",
    type: "track",
    creator: "SZA",
    genre: "pop",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730c471c36970b9406233842a5",
    url: "https://open.spotify.com/track/1Qrg8KqiBpW07V7PNxwwwL",
    duration: 153946,
    previewUrl:
      "https://p.scdn.co/mp3-preview/4bd2dc84016f3743add7eea8b988407b1b900672?cid=2aca6730af4f4265a9834239348b9a1d",
    favorited: false,
  },
  {
    id: "5t61snu5NI8OczCDhzLj8J",
    name: 'Introducing, "Impromptu"',
    type: "episode",
    creator: "The Washington Post",
    genre: "news",
    imageUrl:
      "https://i.scdn.co/image/ab6765630000ba8ac4608ce7a6445d4786cb97f8",
    url: "https://open.spotify.com/episode/5t61snu5NI8OczCDhzLj8J",
    duration: 150230,
    previewUrl:
      "https://podz-content.spotifycdn.com/audio/clips/4PxMegCke4AoEBMveeNNb0/clip_0_60000.mp3",
    favorited: false,
  },
  {
    id: "1BnIv70HXoRkN8pWYjMKsN",
    name: "Sam Altman’s $7 Trillion ‘Moonshot’",
    type: "episode",
    creator: "The Wall Street Journal",
    genre: "news",
    imageUrl:
      "https://i.scdn.co/image/ab6765630000ba8a8987f4533ff88ee624f81a5d",
    url: "https://open.spotify.com/episode/5t61snu5NI8OczCDhzLj8J",
    duration: 1161168,
    previewUrl:
      "https://podz-content.spotifycdn.com/audio/clips/6PbcDjBY2DHXsYIJkdJzCh/clip_764800_824500.mp3",
    favorited: false,
  },
  {
    id: "5l1WQaIxXClAXJeeXcTl4F",
    name: "When AI can fake reality, who can you trust?",
    type: "episode",
    creator: "TED Tech",
    genre: "tech",
    imageUrl:
      "https://i.scdn.co/image/ab6765630000ba8a6afe5e60b701e26a6af01266",
    url: "https://open.spotify.com/show/1iwcjlgreRD0nJxgtdwMLx",
    duration: 921509,
    previewUrl:
      "https://podz-content.spotifycdn.com/audio/clips/4tTQp2C1UPAVVz8VzhFMdc/clip_744500_814500.mp3",
    favorited: false,
  },
  {
    id: "2g4aJTa5ejGpp0O0GKzWAQ",
    name: "Feather",
    type: "track",
    creator: "Sabrina Carpenter",
    genre: "pop",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730f45623be014a592a5815827",
    url: "https://open.spotify.com/track/2Zo1PcszsT9WQ0ANntJbID",
    duration: 185552,
    previewUrl:
      "https://p.scdn.co/mp3-preview/fda145d12a84306269e306b96f2837deecbd829d?cid=2aca6730af4f4265a9834239348b9a1d",
    favorited: false,
  },
  {
    id: "7L3FVocaOV7R9t9psYF7pr",
    name: "A New Satiesfaction (Gymnopédie No. 1)",
    type: "track",
    creator: "Ray Chen",
    genre: "classical",
    imageUrl:
      "https://i.scdn.co/image/ab67616d0000b2730fc6cc89cdf942cfe0dea28a",
    url: "https://open.spotify.com/track/7L3FVocaOV7R9t9psYF7pr",
    duration: 271919,
    previewUrl:
      "https://p.scdn.co/mp3-preview/fda145d12a84306269e306b96f2837deecbd829d?cid=2aca6730af4f4265a9834239348b9a1d",
    favorited: false,
  },
  {
    id: "4ZjDC1bIK3IXWVRmdmNCmb",
    name: "How to Chat with Bots",
    type: "episode",
    creator: "Stanford GSB",
    genre: "tech",
    imageUrl:
      "https://i.scdn.co/image/b5a470d7d4dd60053c3aa8b31b7b5dbebb0b1a7c",
    url: "https://open.spotify.com/show/6ll0MwobDt1JW9gYaOONEo",
    duration: 1479497,
    previewUrl:
      "https://p.scdn.co/mp3-preview/fda145d12a84306269e306b96f2837deecbd829d?cid=2aca6730af4f4265a9834239348b9a1d",
    favorited: false,
  },
];
