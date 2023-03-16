import { z } from "zod";
import { PROSPECT } from "~/utils/types";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";


export const exampleRouter = createTRPCRouter({
  upload:publicProcedure
  .input(z.object({name:z.string(),lastName:z.string(),phonenumber:z.string()}).array())
  .mutation(({ctx,input})=>{
          if(input){
            const uploadData=ctx.prisma.client.createMany({
              data:input
            })
          }
  })
  /* hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }), */

 /*  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
 */
 /*  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }), */
});
