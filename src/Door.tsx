const Door = ({
  props,
}: {
  props: {
    number: number;
    setChoice: React.Dispatch<React.SetStateAction<number>>;
  };
}) => {
  const { number, setChoice } = props;
  return (
    <div onMouseDown={() => setChoice(number)} className="door" role="button">
      <p>{`Door #${number}`}</p>
    </div>
  );
};

export default Door;
