import Image from "next/image";
import Header from "./Header";
import Blog from "./Blog";
import Profile from "./Profile";
import { ProfileProps } from "./Profile";

interface CardProps {
  cardData: {
    id: string;
    url: string;
    width: number;
    height: number;
  };
}

const Card = async ({cardData, users}: {cardData: any, users: ProfileProps}) => {
  return (
    <div className="contenedor">
        <div className="parte-1">
            <Image src={"/illustration-article.svg"} alt={"Publicaccion"} width={320} height={200}/>
            <Header name = {cardData.name} origen = {cardData.origin} />
        </div>
        <Blog titulo={cardData.name} description={cardData.description}/>
        <Profile ProfileProps={undefined}  />
    </div>
  )
}

export default Card;