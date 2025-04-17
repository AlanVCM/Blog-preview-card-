import React from "react";
interface BlogProps {
  titulo: string;
  description: string;
}

const Blog = ({titulo, description}: BlogProps) => {
  return (
    <div className="parte-2">
        <h1>{titulo}</h1>
        <p>{description}</p>
      </div>
  );
};

export default Blog;
