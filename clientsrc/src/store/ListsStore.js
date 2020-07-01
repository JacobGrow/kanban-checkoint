import api from "./AxiosService"
import router from '../router/index'


export const ListsStore = {

    actions: {

        async getLists({ commit, dispatch }, id) {
            try {
                let res = await api.get("boards/" + id + "/lists")
                commit('setLists', res.data)
            } catch (error) {
              console.error(error)
            }
            
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
                dispatch("getLists", list.boardId.id)
            } catch (error) {
                console.error(error)
            }
        }
    }
}