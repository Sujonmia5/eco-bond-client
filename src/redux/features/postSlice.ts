import { TPost, TPostsState } from "@/interface/UtilsTypes";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: TPostsState = {
  posts: [
    {
      _id: "65a123f4e89b1c0012345678",
      userId: "user_001",
      content: "Just planted some tomatoes in my backyard!",
      imageUrl: "https://example.com/images/tomato-plant.jpg",
      totalComment: 5,
      comments: [],
      totalVote: 20,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345679",
      userId: "user_002",
      content: "Does anyone know the best season to grow basil?",
      totalComment: 12,
      totalVote: 35,
      comments: [],
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345680",
      userId: "user_003",
      comments: [],
      imageUrl: "https://example.com/images/sunflower.jpg",
      totalComment: 3,
      totalVote: 15,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345681",
      userId: "user_004",
      comments: [],
      content: "Check out my new indoor herb garden setup!",
      imageUrl: "https://example.com/images/herb-garden.jpg",
      totalComment: 8,
      totalVote: 42,
      isDeleted: false,
    },
    {
      _id: "65a123f4e89b1c0012345682",
      userId: "user_005",
      content: "My lettuce plants didn't survive the winter 😞",
      totalComment: 6,
      comments: [],
      totalVote: 10,
      isDeleted: true,
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
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchPosts.pending, (state) => {
  //         state.loading = true;
  //       })
  //       .addCase(
  //         fetchPosts.fulfilled,
  //         (state, action: PayloadAction<TPost[]>) => {
  //           state.posts = [...state.posts, ...action.payload];
  //           state.page += 1;
  //           state.hasMore = action.payload.length === 10;
  //           state.loading = false;
  //         }
  //       )
  //       .addCase(fetchPosts.rejected, (state) => {
  //         state.loading = false;
  //       });
  //   },
});

export const { resetPosts } = postsSlice.actions;
export default postsSlice.reducer;
