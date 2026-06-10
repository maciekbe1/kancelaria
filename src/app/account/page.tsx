import { getCmssyUser } from "@cmssy/next";
import { cmssy } from "@/cmssy/config";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const user = await getCmssyUser(cmssy);
  return (
    <main style={{ padding: 32 }}>
      <h1>Account (SSR)</h1>
      {user ? (
        <p data-testid="ssr-user">Server sees: {user.email}</p>
      ) : (
        <p data-testid="ssr-anon">Server sees: not signed in</p>
      )}
    </main>
  );
}
