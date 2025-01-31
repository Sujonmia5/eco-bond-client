export type TPost = {
  _id: string;
  userId: string;
  content?: string;
  imageUrl?: string;
  totalComment: number;
  comments: [string] | [];
  totalVote: number;
  isDeleted: boolean;
};

export type TPostsState = {
  posts: TPost[];
  page: number;
  hasMore: boolean;
  loading: boolean;
};

export type TAuthInialState = {
  user: null | {
    name: string;
    email: string;
    isVerified: boolean;
    role: "admin" | "user";
  };
  token: string | null;
};
