import { SignInButton, SignOutButton, UserButton, auth } from "@clerk/nextjs"

export default function Home() {
  const { userId } = auth()
  return (
    <div>
      {userId ? (
        <div>
          <h1>Welcome back!</h1>
          <p>You are signed in.</p>
          <UserButton />
        </div>
      ) : (
        <div>
          <h1>Welcome!</h1>
          <p>You are not signed in.</p>
        </div>
      )}
      {userId ? <SignOutButton /> : <SignInButton />}
    </div>
  )
}
