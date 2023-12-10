import Redis from "ioredis";
const redis = new Redis();

const callRedis = async () => {
  await redis.set("foo", "bar");
  const result = await redis.get("foo");
  console.log(result);
};

export default callRedis