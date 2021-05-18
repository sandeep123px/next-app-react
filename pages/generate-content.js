import { Box } from "reflexbox";
var faker = require("faker");
const GenerateContent = () => {
  let i;
  const addContent = async (event) => {
    for (i = 0; i < 100; i++) {
      event.preventDefault();
      const user = {
        Title: faker.lorem.sentence(),
        Content: faker.lorem.paragraph(),
      };
      const generate = await fetch(`http://localhost:1337/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const generateResponse = await generate.json();
      console.log(generateResponse, "Response");
    }
  };
  return (
    <>
      <button onClick={addContent}>generate Content</button>
    </>
  );
};
export default GenerateContent;
