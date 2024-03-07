export default defineNuxtRouteMiddleware(async (to, from) => {
    if(process.client){
        const router = useRouter();
        const userStr = useUserStore();
        const addProfile = await userStr.getProfileDetail();
        if(addProfile?.success){
            console.log('Profile already, navigate to /seeker/profile')
            return router.push('/seeker/profile');
        }
    }
})