const mockDelay = () => new Promise(resolve => setTimeout(resolve, 500))

export default {
  toggleLoading: () => state => ({ isLoading: !state.isLoading }),
  signIn: () => async (state, actions) => {
    actions.toggleLoading()
    await mockDelay()
    actions.toggleLoading()
  },
}
