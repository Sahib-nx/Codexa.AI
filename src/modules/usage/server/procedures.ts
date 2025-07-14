import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { getUserStatus } from "@/lib/usage";


export const usageRouter = createTRPCRouter({
    status: protectedProcedure.query(async () => {
        try {
            const result = await getUserStatus();

            return result;
        } catch (error) {
            console.error(error);
            return null;
        }
    }),
});