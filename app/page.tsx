import MyForm from "@/components/ui/create-an-account/MyForm";
import FormHeader from "@/components/ui/create-an-account/FormHeader";
import FormHero from "@/components/ui/create-an-account/FormHero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[url('/skull.jpg')] bg-cover bg-center w-full">
      <FormHeader />

      <div className="flex flex-1 flex-col lg:flex-row gap-8 mt-8 px-8 ">
        <div className="flex-1">
          <FormHero />
        </div>
        <div className="flex-1 max-w-lg w-full">
          <MyForm />
        </div>
      </div>
    </main>
  );
}
