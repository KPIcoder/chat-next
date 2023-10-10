import UserWidget from "@/modules/user/components/UserWidget";

const getUser = async () =>
  new Promise<{ name: string; age: number; email: string }>((resolve) =>
    setTimeout(
      () => resolve({ name: "Bob", age: 25, email: "bob.25@email.com" }),
      500
    )
  );

export default async function Page() {
  const user = await getUser();

  return <UserWidget name={user.name} age={user.age} email={user.email} />;
}
