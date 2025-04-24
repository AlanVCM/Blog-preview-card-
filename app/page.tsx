import Card from "@/components/Card";

export default async function Home() {
  const data = await fetch('https://api.thecatapi.com/v1/breeds');
  const posts = await data.json();

  const dataUsers = await fetch('https://6801162e81c7e9fbcc417654.mockapi.io/users');
  const users = await dataUsers.json();
  return (
    <>
      {
        posts.map((post: any) => (
          <Card key={post.id} cardData={post} users={users[10]} />
        ))
      }
    </>
  );
}
