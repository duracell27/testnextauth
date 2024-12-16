"use server";
import { signIn, signOut } from "@/auth";
import { db } from "@/db";
import { AuthError } from "next-auth";

import { revalidatePath } from "next/cache";

const getUserByEmail = (email: string) => {
  try {
    const user = db.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

export const loginWithCredentials = async (formData: FormData) => {
    const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password'),
        role: 'ADMIN',
        redirectTo: '/'
    }

    //const user = await getUserByEmail(rawFormData.email as string); 
    

    try{
        await signIn('credentials', rawFormData)
    }catch(e){
        if(e instanceof AuthError) {
            switch (e.type) {
                case 'CredentialsSignin': {
                    return {error: 'Invalid email or password'}
                };
                default: {
                    return {error: 'Something went wrong'}
                }
            }
        }

        throw e;
    }
    revalidatePath('/')
}
