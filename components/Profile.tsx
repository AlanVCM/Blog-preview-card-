import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="parte-3">
        <Image src="/image-avatar.webp" alt="Greg Hooper" width={64} height={64} />
        <p>Greg Hooper</p>
    </div>
  );
};

export default Profile;
