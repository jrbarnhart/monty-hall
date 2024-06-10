const Door = ({ props }: { props: { label: string } }) => {
  const { label } = props;
  return (
    <div className="door">
      <p>{label}</p>
    </div>
  );
};

export default Door;
