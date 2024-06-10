const Door = ({ props }: { props: { letter: string } }) => {
  const { letter } = props;
  return (
    <div>
      <p>Door {letter}</p>
    </div>
  );
};

export default Door;
