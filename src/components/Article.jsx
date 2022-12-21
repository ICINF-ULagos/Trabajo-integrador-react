import { Text, Flex } from "@chakra-ui/react";
import { parseISO, formatDistanceToNow as f } from "date-fns";

import AuthorName from "./AuthorName";

const Article = ({ title, body, userId, createAt, updateAt }) => {
  const format = (date) => {
    return f(parseISO(date));
  };
  return (
    <Flex justifyContent="center">
      <article style={{ width: "100ch" }}>
        <Text fontSize="5xl">{title}</Text>
        <Text fontSize="md">author: {userId}</Text>
        <Text fontSize="2xl">{body}</Text>
        <AuthorName mb="2rem" id={userId} />
        <Text fontSize="sm" as="i">
          Created: {format(createAt)} ago, Updated: {format(updateAt)} ago.
        </Text>
      </article>
    </Flex>
  );
};
export default Article;
