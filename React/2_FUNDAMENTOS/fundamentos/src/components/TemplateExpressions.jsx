const TemplateExpressions = () => {
  const name = "Paulo";
  const data = {
    age: 23,
    job: "Programmer",
  };

  return (
    <div>
      <p>Olá, meu nome é {name}!</p>
      <p>
        Eu atuo como {data.job} e tenho {data.age}
      </p>
      <p>{4 + 4}</p>
    </div>
  );
};

export default TemplateExpressions;
