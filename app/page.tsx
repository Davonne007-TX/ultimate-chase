import MyForm from "@/components/ui/create-an-account/MyForm";
import FormHeader from "@/components/ui/create-an-account/FormHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/skull.jpg')] bg-cover bg-center w-full">
      <FormHeader />

      <div className="flex flex-col lg:ml-auto mr-20 max-w-lg mt-8">
        {/* <h1 className="text-6xl mt-20 font-bold font-mono text-white">
          Ultimate Chase
        </h1> */}

        <MyForm />
      </div>
    </main>
  );
}
