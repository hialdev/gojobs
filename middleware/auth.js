export default async function ({ redirect }) {
    if(process.client){
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            return redirect('/login'); 
        }
    
        try {
            const user = useUserStore();
            const fetch = await user.getProfile();
            if(!fetch?.success){
                return redirect('/login');
            }
        } catch (error) {
        return redirect('/login');
        }
    }
}