"use server"

import { IQuote } from "@/types/quote";
import { quoteApi } from "@/utils/fetcher";

export async function getQuote(): Promise<IQuote> {
   const api = await quoteApi();

   const quote: IQuote = await api
      .url("random?category=dev")
      .get()
      .json();

   return quote;
}
