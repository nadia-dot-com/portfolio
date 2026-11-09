import type { GlobalStyleObject } from "@chakra-ui/react";

export const styles = {
    root: {
        position: "sticky",
        top: 0,
        zIndex: "modal",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        width: "100%",
        maxWidth: "1152px",
        paddingY: "4",
        border: "1px solid",
        borderColor: "border-color",
        borderRadius: "2xl",
        background: "header-background-color",
        paddingX: { base: "20px", md: "30px"}
    },
    logo: {
        fontSize: "md",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        fontWeight: "600"
    },
    nav: {
        justifyContent: "center",
    },
    list: {
        display: "flex",
        flexDir: "row",
        alignItems: "center",
        gap: "6",
        listStyle: "none",
        fontWeight: "600"
    },
    link: {
        fontSize: "xs",
        textTransform: "uppercase",
        _hover: {
            textDecoration: "none",
            color: "accent-pink-color",
        },
    },
} as const satisfies GlobalStyleObject;
