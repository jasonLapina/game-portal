import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search");
    setSearchValue("");
  };
  return (
    <InputGroup as='form' onSubmit={submitHandler} maxW='32%'>
      <Input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
        placeholder='Search game'
      />
      <InputRightElement as='button' children={<Search2Icon />} />
    </InputGroup>
  );
}

export default SearchBar;
