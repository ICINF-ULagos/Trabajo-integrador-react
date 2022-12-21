import { Text, Flex } from "@chakra-ui/react";

const Article = ({ title, body, userId, createAt, updateAt }) => {
  return (
    <Flex justifyContent="center">
      <article style={{ width: "100ch" }}>
        <Text fontSize="5xl">{title}</Text>
        <Text fontSize="md">author: {userId}</Text>
        <Text fontSize="2xl">{body}</Text>
        <Text fontSize="sm" as="i">
          Created at: {createAt}, Updated at: {updateAt}
        </Text>
      </article>
    </Flex>
  );
};
export default Article;
