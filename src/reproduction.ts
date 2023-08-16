import * as v from "valibot";
import { createAssert } from "@decs/typeschema";

const schema = v.object({ name: v.string() });
const assert = createAssert(schema);

export const assertSchema = async () =>
  console.log(await assert({ name: "hello" }));
