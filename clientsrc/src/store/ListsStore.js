import api from "./AxiosService"
import router from '../router/index'


export const ListsStore = {

    actions: {

        getLists({ commit, dispatch }, id) {
            api.get("boards/" + id + "/lists")
                .then(res => {
                    commit('setLists', res.data)
                })
        },
        async addList({ commit, dispatch }, newList) {
            try {
                let res = await api.post('lists/' + newList.boardId, newList)
                dispatch("getLists", newList.boardId)
            } catch (error) {
                console.error(error)
            }
        },
        async removeList({ commit, dispatch }, list) {
            try {
                let res = await api.delete('lists/' + list.id)
                dispatch("getLists", list.boardId)
            } catch (error) {
                console.error(error)
            }
        }
    }
}