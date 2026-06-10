import { SignInForm } from "./sign-in-form";

export const dynamic = "force-dynamic";

export default function SignInPage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>Sign in</h1>
      <SignInForm />
    </main>
  );
}
