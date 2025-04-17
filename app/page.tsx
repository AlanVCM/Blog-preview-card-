import Card from "@/components/Card";

export default async function Home() {
  const data = await fetch('https://api.thecatapi.com/v1/breeds');
  const posts = await data.json();
  // console.log(posts[0]);
  // const cat = await fetch(`https://api.thecatapi.com/v1/images/Qjb0fsrDo`);
  // const cataData = await cat.json();
  // console.log(cataData);
  return (
    <>
      {
        posts.map((post) => (
          <Card key={post.id} cardData={post} />
        ))
      }
    </>
  );
}
