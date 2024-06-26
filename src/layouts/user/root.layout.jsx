import Header from "@/components/user/Header";

function RootLayoutUser({ children }) {
  return (
    <div className="flex min-h-[100vh] justify-center bg-[--primaryBackgroundColor] p-[30px]">
      <div className="flex w-[1170px] flex-col gap-[30px]">
        <Header />
        <main className="flex min-h-min flex-col gap-[20px] rounded-[20px] bg-white p-[30px]">
          {children}
        </main>
      </div>
    </div>
  );
}

export default RootLayoutUser;
