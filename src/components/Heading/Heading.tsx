import "./Heading.scss";

const Heading = (props: { title: string }) => {
  const { title } = props;
  return <h2 className="Heading">{title}</h2>;
};

export default Heading;
