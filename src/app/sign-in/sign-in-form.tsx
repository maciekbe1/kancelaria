"use client";

import { useState } from "react";
import { CmssyAuthProvider, useCmssyUser } from "@cmssy/react/client";

function Inner() {
  const { user, loading, signIn, signOut } = useCmssyUser();
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  if (loading) return <p>Loading…</p>;

  if (user) {
    return (
      <div>
        <p data-testid="signed-in">Signed in as {user.email}</p>
        <button type="button" onClick={() => void signOut()}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await signIn(identity, password);
        setMessage(res.ok ? null : (res.message ?? "Sign-in failed"));
      }}
    >
      <input
        aria-label="email"
        value={identity}
        onChange={(e) => setIdentity(e.target.value)}
        placeholder="email"
      />
      <input
        aria-label="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">Sign in</button>
      {message ? <p data-testid="error">{message}</p> : null}
    </form>
  );
}

export function SignInForm() {
  return (
    <CmssyAuthProvider>
      <Inner />
    </CmssyAuthProvider>
  );
}
