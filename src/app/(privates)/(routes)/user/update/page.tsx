import { getUserId } from "@/services/user";

import UpdateUser from "@/app/(privates)/(routes)/user/update/components/UpdateUser";

// * atualizar informações do usuario 'user/update'

const myuser = {
  id: "d49f2af4-333c-4873-8fe4-ffa5ca7b2822",
  name: "Charlie Bellow",
  password: "$2a$08$epbV.KVDbEQSctWVhSocbOo1KaysC886/pDWopJDOwtfmlpzV9ygm",
  email: "email@email.com",
  avatar: "https://www.github.com/arthwrvl.png",
  isAdmin: false,
  created_at: "2023-03-22T16:19:14.843Z",
  permissions: [],
  roles: [],
};

export default async function FormUpdateUser() {
  const user = await getUserId(myuser.id);

  return <UpdateUser user={user} />;
}
