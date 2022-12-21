import { Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";

const AuthorName = ({ id }) => {
  const [name, setName] = useState(undefined);
  const { getNameById, isLoading } = useUser();

  const getName = async () => {
    const data = await getNameById(id);
    setName(data ?? "Unkown");
  };

  useEffect(() => {
    getName();
  }, []);

  return isLoading ? <Spinner size="xs" /> : <Text as="i">{name}</Text>;
};

export default AuthorName;
