import {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../generated/graphql";
 
export const useUsers = () => {
  const { data, loading, error, refetch } = useGetUsersQuery();
  const [createUser] = useCreateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();
 
  return {
    users: data?.users || [],
    loading,
    error,
    createUser,
    deleteUser,
    updateUser,
    refetch,
  };
};
 