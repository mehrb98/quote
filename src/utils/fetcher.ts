import wretch from "wretch";

export const quoteApi = async () => {
   return wretch(process.env.NEXT_PUBLIC_API_URL);
}
