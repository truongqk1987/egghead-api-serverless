import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const body = event.body ? JSON.parse(event.body) : {};
  const { name, favoriteColor } = body;

  console.log({ name, favoriteColor });

  return {
    statusCode: 200,
    body: JSON.stringify({
      name,
      favoriteColor,
      message: `My name is ${name} and my favorite color is ${favoriteColor}.`,
    }),
  };
};
