import MyForm from "@/components/ui/create-an-account/MyForm";
import FormHeader from "@/components/ui/create-an-account/FormHeader";
import FormHero from "@/components/ui/create-an-account/FormHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[url('/skull.jpg')] bg-cover bg-center bg-no-repeat justify-center w-full">
      <FormHeader />

      <div className="bg-gray-800/40 rounded">
        <div className="mx-auto flex flex-col lg:flex-row justify-center items-center">
          <FormHero />

          <div className="max-w-md w-full">
            <MyForm />
          </div>
        </div>
      </div>
    </main>
  );
}
