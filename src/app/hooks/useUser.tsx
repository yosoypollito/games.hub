import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { selectUser } from "@/redux/slices/user";
import { useEffect } from "react";
import { fetchUser } from "@/redux/slices/user";

export default function useUser() {

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const userStatus = useAppSelector(state => state.user.status);
  const errorMessage = useAppSelector(state => state.user.error)

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUser());
    }
  }, [user, dispatch, userStatus])


  return {
    user,
    status: userStatus,
    error: errorMessage
  }
}