import type { GlobalStyleObject } from "@chakra-ui/react";

export const styles = {
    main: {
        flexDir: "column",
        alignItems: "center",
        paddingX: { base: "10px", sm: "20px", md: "30px" },
        width: "100%",
        flex: 1,
    }
} as const satisfies GlobalStyleObject;