import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../action";
import ProfileInfo from "../components/profile/ProfileInfo";
import MyPosts from "../components/profile/MyPosts";

const ProfilePage = () => {
    const {auth} = useAuth()
    
  const {state, dispatch} = useProfile();
    const {api} = useAxios();

    useEffect(()=>{
        
      dispatch({type: actions.profile.DATA_FETCHING})
        const fetchProfile = async()=>{
            try{
             const response =    await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`)
                if(response.status===200){
                  dispatch({type:actions.profile.DATA_FETCHED, data: response.data})
                }
            } catch(error){
                console.log(error)
                dispatch({type: actions.profile.DATA_FETCH_ERROR,error:error.message})
              }
        }
        fetchProfile();
    },[dispatch,api, auth?.user?.id])

    if(state?.loading){
        return <div>Your Profile is loading</div>
    }
  return (
    <>
    <ProfileInfo />
    <MyPosts />
      
      
    </>
  );
};

export default ProfilePage;
