export default {
     async doLogin({ commit, dispatch }) {

       
     },
     async getUserProfile({commit, dispatch}) {
          console.log('start getting profile')
          const userProfile = await this.$axios.get('admin/profile')
          console.log(userProfile)
     }
};