import api from "./AxiosService"
import router from '../router/index'


export const ItemsStore = {

    actions: {

        getItems({ commit, dispatch }, id) {
            api.get("lists/" + id + "/items")
                .then(res => {
                    commit('setItems', res.data)
                })
        },
        async addItems({ commit, dispatch }, newItem) {
            try {
                let res = await api.post('items/' + newItem.listId, newItem)
                dispatch("getItems", newItem.listId)
            } catch (error) {
                console.error(error)
            }

        },
    }
}