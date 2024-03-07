export default defineNuxtRouteMiddleware(async (to, from) => {
    if(process.client){
        const router = useRouter();
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            console.log('Will navigate to login')
            return router.push('/auth/login'); 
        }else{
            const user = useUserStore();
            const checkProfile = await user.getProfileDetail();
            if(!checkProfile?.success){
                console.log('Will navigate to create profile')
                return router.push('/seeker/profile/create');
            }
        }
    
        try {
            const user = useUserStore();
            const fetch = await user.getProfile();
            if(!fetch?.success){
                return router.push('/auth/login');
            }else{
                const checkProfile = await user.getProfileDetail();
                if(!checkProfile?.success){
                    return router.push('/seeker/profile/create');
                }
            }
        } catch (error) {
            console.log(error);
            return router.push('/auth/login');
        }
    }
})