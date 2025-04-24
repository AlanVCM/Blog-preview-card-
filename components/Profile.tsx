import Image from "next/image";
import React from "react";

export interface ProfileProps {
  createdAt: string,
  name: string,
  avatar: string,
  fecha_de_nacimiento: string,
  id: string
}

const Profile = ({user}: {ProfileProps}) => {
  return (
    <div className="parte-3">
        <Image src="/image-avatar.webp" alt="Greg Hooper" width={64} height={64} />
        <p>{user}</p>
    </div>
  );
};

export default Profile;
