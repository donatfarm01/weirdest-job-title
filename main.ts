import { mkdirSync, writeFileSync } from "node:fs";

// The weirdest job title this entry could think of: a person whose whole
// role is apologising on behalf of a machine everyone has been annoyed by.
const JOB_TITLE = "Chief Apology Officer for Self-Checkout Machines";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOB_TITLE, "utf8");
