import AuthForm from "@/components/AuthForm";

const SignupPage = () => {
  return (
    <main className="overflow-hidden w-full min-h-screen bg-indigo-950 bg-stars text-slate-50 relative grid lg:grid-cols-2">
      <AuthForm type="signup" />
      <section className="hidden lg:flex h-full bg-indigo-800 rounded-l-3xl" />
    </main>
  );
};
export default SignupPage;
