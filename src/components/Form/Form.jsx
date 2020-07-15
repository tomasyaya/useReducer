import React from "react";
import { CustomForm, Input, Button } from "./styles";

const Form = ({ text, title, handleChange, handleSubmit }) => (
  <CustomForm onSubmit={handleSubmit}>
    <Input
      required
      type="text"
      name="title"
      placeholder="title"
      value={title}
      onChange={handleChange}
    />
    <Input
      required
      type="text"
      name="text"
      placeholder="text"
      value={text}
      onChange={handleChange}
    />
    <Button type="submit">Add</Button>
  </CustomForm>
);

Form.defaultProps = {
  handleSubmit: () => {},
  handleChange: () => {},
};

export default Form;
