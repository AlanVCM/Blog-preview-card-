import Image from "next/image";
import React from "react";

const Profile = ({temperament}: {temperament:string}) => {
  return (
    <div className="parte-3">
        <Image src="/image-avatar.webp" alt="Greg Hooper" width={64} height={64} />
        <p>{temperament}</p>
    </div>
  );
};

export default Profile;
