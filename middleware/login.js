export default function({ store, redirect }) {
  if (!store.getters['login/isLogged']) {
    redirect('/login')
  }
}
