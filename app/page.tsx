import MyForm from "@/components/MyForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[url('/skull.jpg')] bg-cover bg-center w-full">
      <div className="flex flex-col lg:ml-auto mr-20 max-w-xl p-8">
        {/* <h1 className="text-6xl mt-20 font-bold font-mono text-white">
          Ultimate Chase
        </h1> */}
        <MyForm />
      </div>
    </main>
  );
}
