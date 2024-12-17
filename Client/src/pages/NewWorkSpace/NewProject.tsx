import Card from "../../components/component/Card";

const NewProject = () => {
  const handleResize = (size: { width: number; height: number }) => {
    console.log("New size:", size);
  };

  const handleDrag = (position: { x: number; y: number }) => {
    console.log("New position:", position);
  };

  return (
    <div>
      <Card
        defaultPosition={{ x: 200, y: 100 }}
        defaultSize={{ width: 350, height: 500 }}
        backgroundColor="#FFD700"
        onResize={handleResize}
        onDrag={handleDrag}
      />
      <Card
        defaultPosition={{ x: 600, y: 300 }}
        defaultSize={{ width: 300, height: 400 }}
        backgroundColor="#1675755e"
        onResize={handleResize}
        onDrag={handleDrag}
      />
      <Card
        defaultPosition={{ x: 900, y: 200 }}
        defaultSize={{ width: 300, height: 400 }}
        backgroundColor="#eb2c135e"
        onResize={handleResize}
        onDrag={handleDrag}
      />
      <Card
        defaultPosition={{ x: 900, y: 200 }}
        defaultSize={{ width: 300, height: 400 }}
        backgroundColor="#eb2c135e"
        onResize={handleResize}
        onDrag={handleDrag}
      />
      <Card
        defaultPosition={{ x: 900, y: 200 }}
        defaultSize={{ width: 300, height: 400 }}
        backgroundColor="#eb2c135e"
        onResize={handleResize}
        onDrag={handleDrag}
      />
    </div>
  );
};

export default NewProject;
