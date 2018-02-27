import { h } from 'hyperapp'

export default ({ user, signIn, signOut }) => (
  <div>
    {user.loading && <div>Loading...</div>}
    {!user.displayName &&
      !user.loading && (
        <button onclick={signIn} class="tertiary">
          Sign In
        </button>
      )}
    {user.displayName && (
      <button onclick={signOut} class="tertiary">
        Sign Out
      </button>
    )}
  </div>
)
