import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const ProfilePage = () => {
    const {auth} = useAuth()
    const [user, setUser] = useState(null)
    const [post, setPost] = useState([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const {api} = useAxios();

    useEffect(()=>{
        setLoading(true)
        const fetchProfile = async()=>{
            try{
             const response =    await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`)
                setUser(response?.data?.user);
                setPost(response?.data?.posts)
            } catch(error){
                console.log(error)
                setError(error)
            }finally{
                setLoading(false)
            }
        }
        fetchProfile();
    },[api,auth.user.id])

    if(loading){
        return <div>Your Profile is loading</div>
    }
  return (
    <div>
      <p>welcome {user?.firstName}</p>
      <p>you have {post.length} posts.</p>
      {
        error && <p>{error}</p>
      }
    </div>
  );
};

export default ProfilePage;
