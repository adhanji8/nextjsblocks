/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CgMhqiekLvg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "../actions";
import { ErrorBox } from "@/components/ErrorBox";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LoginPage({ searchParams }: any) {
  const user = cookies().get("user_id")?.value;
  if (user) redirect("/blocks");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
        </div>
        <form action={login} className="mt-8 space-y-6" method="POST">
          {searchParams?.error && <ErrorBox>{searchParams?.error}</ErrorBox>}
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Label htmlFor="username" className="sr-only">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="relative block w-full appearance-none rounded-t-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-b-md border border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-primary py-2 px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
