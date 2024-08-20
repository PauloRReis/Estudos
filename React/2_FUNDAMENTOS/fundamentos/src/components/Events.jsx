const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou!!!");
  };
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!!")}>Clique aqui tbm</button>
        <button
          onClick={() => {
            if (true) console.log("Isso não ta certo!!");
          }}
        >
          Clica aqui, por favor
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
