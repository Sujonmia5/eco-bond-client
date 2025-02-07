import { TPostsState } from "@/interface/UtilsTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TPostsState = {
  posts: [
    {
      _id: "65a123f4e89b1c0012345678",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content: "Just planted some tomatoes in my backyard! ",
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      totalComment: 5,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Love the tomatoes!",
        },
      ],
      totalVote: 20,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345679",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,doloribus. Facilis quod, repellat veniam voluptatum modi expedita dignissimos autem!",
      totalComment: 12,
      totalVote: 35,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Nice post!",
        },
      ],
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345678",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content: "Just planted some tomatoes in my backyard! ",
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      totalComment: 5,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Love the tomatoes!",
        },
      ],
      totalVote: 20,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345678",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content: "Just planted some tomatoes in my backyard! ",
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      totalComment: 5,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Love the tomatoes!",
        },
      ],
      totalVote: 20,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345678",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content: "Just planted some tomatoes in my backyard! ",
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      totalComment: 5,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Love the tomatoes!",
        },
      ],
      totalVote: 20,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345678",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content: "Just planted some tomatoes in my backyard! ",
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      totalComment: 5,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Love the tomatoes!",
        },
      ],
      totalVote: 20,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345678",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content: "Just planted some tomatoes in my backyard! ",
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      totalComment: 5,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Love the tomatoes!",
        },
      ],
      totalVote: 20,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345678",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content: "Just planted some tomatoes in my backyard! ",
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      totalComment: 5,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Love the tomatoes!",
        },
      ],
      totalVote: 20,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345678",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content: "Just planted some tomatoes in my backyard! ",
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      totalComment: 5,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Love the tomatoes!",
        },
      ],
      totalVote: 20,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345678",
      userId: {
        _id: "user_002",
        name: "John Doe",
        profileImage:
          "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      },
      content: "Just planted some tomatoes in my backyard! ",
      imageUrl: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg",
      totalComment: 5,
      comments: [
        {
          _id: "65a123f4e89b1c0012345680",
          userId: {
            _id: "user_003",
            name: "Jane Doe",
            profileImage: "https://example.com/images/user-profile.jpg",
          },
          comment: "Love the tomatoes!",
        },
      ],
      totalVote: 20,
      isDeleted: false,
    },
  ],
  page: 1,
  hasMore: true,
  loading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetPosts: (state) => {
      state.posts = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
});

export const { resetPosts } = postsSlice.actions;
export default postsSlice.reducer;
