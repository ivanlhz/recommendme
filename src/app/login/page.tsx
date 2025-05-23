'use client'

import { LoginForm } from "@/components/molecules/LoginForm"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/recommendations");
    }
  }, [user, loading, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-primary/5">
      <section className="bg-white p-8 rounded-xl shadow-lg border border-primary/10 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">Iniciar sesión</h1>
        <LoginForm />
      </section>
    </main>
  );
}
