// import { useSigninMutation } from "../store/api/admin.api";

export const useGetTokenHook = () => {
  // const [_, { data, isLoading }] = useSigninMutation({
  //   fixedCacheKey: "signin",
  // });
  return { token: null, isLoading: false };
};
