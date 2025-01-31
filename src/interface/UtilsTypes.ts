export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  contact: string;
  role: "user" | "admin";
  profileImage: string;
  status: "active" | "inActive";
  totalFollower: number;
  followersId: Array<string>;
  isVerified: boolean;
  isDeleted: boolean;
};

export type TPost = {
  _id: string;
  userId: Partial<TUser>;
  content?: string;
  imageUrl?: string;
  totalComment: number;
  comments:
    | [
        {
          _id: string;
          userId: Partial<TUser>;
          comment: string;
          createdAt?: Date;
          updatedAt?: Date;
        }
      ]
    | [];
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
