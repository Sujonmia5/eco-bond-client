/* eslint-disable @typescript-eslint/no-explicit-any */
import { TAuthInialState } from "@/interface/UtilsTypes";
import { setUser } from "@/redux/features/authSlice";
import { AppDispatch } from "@/redux/store";

export const setUserAndToken = (
  res: Record<string, any>,
  dispatch: AppDispatch
) => {
  if (res.data) {
    const userInfo: TAuthInialState = {
      user: {
        name: res.data.name,
        email: res.data.email,
        isVerified: res.data.isVerified,
        role: res.data.role,
      },
      token: res.token,
    };
    localStorage.setItem("token", res.token);
    dispatch(setUser(userInfo));
  }
};
