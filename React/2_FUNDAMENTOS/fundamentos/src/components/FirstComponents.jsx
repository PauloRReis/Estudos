import MyComponent from "./MyComponent";

const FirstComponent = () => {
  // comentario com //
  /*
        multi linhas
    */
  return (
    <div>
      {/* comentario assim aqui */}
      <h1>Meu primeiro componente</h1>
      <p className="teste"> Meu texto </p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
