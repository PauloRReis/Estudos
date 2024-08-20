const Challenge = () => {
  const a = 1,
    b = 2;

  const Soma = () => {
    return console.log(a + b);
  };

  return (
    <div>
      <h1>
        A: {a} e B: {b}
      </h1>
      <div>
        <button onClick={Soma}>Somar A e B</button>
      </div>
    </div>
  );
};

export default Challenge;
