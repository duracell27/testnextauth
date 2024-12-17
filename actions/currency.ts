"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export const addCurrency = async (data: {
  name: string;
  code: string;
  symbol: string;
}) => {
  console.log("add currency", data);
  try {
     await db.currency.create({
        data: {
          name: data.name,
          code: data.code,
          symbol: data.symbol,
        }
      });
  } catch (error) {
    console.error(error);
  }
  
  revalidatePath("/adminPanel/currency");
};

export const editCurrency = async (data: {
  name: string;
  code: string;
  symbol: string;
}, id:string) => {
  console.log("edit currency", data);
  try {
     await db.currency.update({
        where:{
          id
        },
        data: {
          name: data.name,
          code: data.code,
          symbol: data.symbol,
        }
      });
  } catch (error) {
    console.error(error);
  }
  
  revalidatePath("/adminPanel/currency");
};

export const deleteCurrency = async (id:string) => {
  
  try {
     await db.currency.delete({
        where:{
          id
        }
      });
  } catch (error) {
    console.error(error);
  }
  
  revalidatePath("/adminPanel/currency");
};


