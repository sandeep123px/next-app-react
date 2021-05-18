import Card from "../components/card";
let api_key = "a6a17e7887e5bc8db17a0f7d79fb9c4f";
import { Flex, Box } from "reflexbox";
const Home = ({ data }) => {
  console.log(data);
  return (
    <Box maxWidth={960} width="100%" mx="auto" px={30}>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: "column", md: "row" }}
        mb={100}
        flexWrap="wrap"
      >
        {data.map((x, i) => {
          // if (i < 3)
          return (
            <Box width={{ _: "100%", md: "30%" }}>
              <Card key={i} movie={x} />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/movies`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
}
export default Home;