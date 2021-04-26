import { EXAMPLE } from "./constants";

export function exampleAction(data) {
  return {
    type: EXAMPLE,
    data,
  };
}
