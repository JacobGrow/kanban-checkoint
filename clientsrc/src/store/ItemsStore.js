import api from "./AxiosService"
import router from '../router/index'


export const ItemsStore = {

    actions: {

        getItems({ commit, dispatch }, listId) {
            api.get("lists/" + listId + "/items")
                .then(res => {
                    commit('setItems', { listId, items: res.data })
                })
        },
        async addItem({ commit, dispatch }, newItem) {
            try {
                let res = await api.post('items/' + newItem.listId, newItem)
                dispatch("getItems", newItem.listId)
            } catch (error) {
                console.error(error)
            }

        },
        async removeItem({ commit, dispatch }, item) {
            try {
                let res = await api.delete('items/' + item.Id)
                dispatch("getItems", item.listId)
            } catch (error) {
                console.error(error)
            }
        }
    }
}