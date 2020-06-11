import api from "./AxiosService"
import router from '../router/index'


export const CommentsStore = {

    actions: {

        getComments({ commit, dispatch }, itemId) {
            api.get("items/" + itemId + "/comments")
                .then(res => {
                    commit('setComments', { itemId, items: res.data })
                })
        },
        async addComment({ commit, dispatch }, newComment) {
            try {
                let res = await api.post('comments/', newComment)
                dispatch("getComments", newComment.itemId)
            } catch (error) {
                console.error(error)
            }

        },
    }
}