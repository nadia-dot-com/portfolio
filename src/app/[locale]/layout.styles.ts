import type { GlobalStyleObject } from "@chakra-ui/react";
import { gutterX } from "@/charka/shared";

export const styles = {
    main: {
        flexDir: "column",
        alignItems: "center",
        paddingX: gutterX,
        width: "100%",
        maxWidth: "content",
        flex: 1,
    }
} as const satisfies GlobalStyleObject;
