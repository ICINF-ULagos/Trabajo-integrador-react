import { Text, Flex } from "@chakra-ui/react";
import { parseISO, formatDistanceToNow as f } from "date-fns";

import AuthorName from "./AuthorName";

const Article = ({ title, body, userId, createAt, updateAt }) => {
  const format = (date) => {
    return f(parseISO(date));
  };
  return (
    <Flex justifyContent="center" p="1rem">
      <article style={{ width: "85ch" }}>
        <Text fontSize="3xl">{title}</Text>
        <AuthorName mb="2rem" id={userId} />
        <Text fontSize="md">{body}</Text>
        <Text fontSize="sm" as="i">
          Created: {format(createAt)} ago, Updated: {format(updateAt)} ago.
        </Text>
      </article>
    </Flex>
  );
};
export default Article;
