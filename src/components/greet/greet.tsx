const Greet = ({ name }: { name?: string }) => {
  return <h1>Hello {name ? name : 'guest'}</h1>;
};
export default Greet;
