interface HeaderProps  {
  name: string,
  origen: string,
}

const Header = ({ name, origen }:HeaderProps) => {
  return (
    <>
      <button className="mensaje">{name}</button>
      <p>{`Origen: ${origen}`}</p>
    </>
  );
};

export default Header;
