import { assert } from "console";

export function getEnv(name: string) {
    const value = process.env[name];
    assert(value, `Please provide ${name} in your env variables`);
    return value;
}