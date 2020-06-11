import api from "./AxiosService"
import router from '../router/index'


export const BoardsStore = {

    actions: {

        getBoards({ commit, dispatch }) {
            api.get('boards')
                .then(res => {
                    commit('setBoards', res.data)
                })
        },
        addBoard({ commit, dispatch }, boardData) {
            api.post('boards', boardData)
                .then(serverBoard => {
                    dispatch('getBoards')
                })
        },

        async getBoardDetails({ commit, dispatch }, id) {
            try {
                let res = await api.get("boards/" + id);
                commit("setActiveBoard", res.data)
            } catch (error) {
                console.error(error)
            }
        },

        async removeBoard({ commit, dispatch }, _id) {
            try {
                let res = await api.delete("boards/" + _id);
                dispatch("getAllBoards");
            } catch (error) {
                console.error(error)
            }
        }
    }
}