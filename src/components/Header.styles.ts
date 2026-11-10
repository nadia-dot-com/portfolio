import type { GlobalStyleObject } from "@chakra-ui/react";

export const styles = {
    root: {
        position: "sticky",
        top: 0,
        zIndex: "modal",
        gridTemplateColumns: {base:"auto 1fr auto", md: "1fr auto 1fr"},
        alignItems: "center",
        width: "100%",
        maxWidth: "1152px",
        paddingY: "4",
        border: "1px solid",
        borderColor: "border-color",
        borderRadius: "2xl",
        background: "header-background-color",
        paddingX: { base: "10px", sm: "20px", md: "30px" }
    },
    logo: {
        fontSize: "md",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        fontWeight: "600"
    },
    nav: {
        display: { base: "none", md: "flex" },
        alignItems: "center",
    },
    list: {
        display: "flex",
        flexDir: "row",
        alignItems: "center",
        gap: 6,
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
    icon: {
        height: "30px",
        width: "30px",
    },
    mobileMenu: {
        display: { base: "flex", md: "none" },
    },
    mobileList: {
        position: "absolute",
        top: "89%",
        right: 0,
        zIndex: "modal",
        display: "flex",
        flexDir: "column",
        alignItems: "flex-start",
        gap: 2,
        listStyle: "none",
        fontWeight: "600",
        width: "140px",
        padding: 1,
        border: "1px solid",
        borderColor: "border-color",
        rounded: "xl",
        backgroundColor: "background-color",
        opacity: 0,
        visibility: "hidden",
        pointerEvents: "none",
        transform: "translateY(-8px)",
        transition: "opacity 0.25s ease, transform 0.25s ease, visibility 0.25s",
        _open: {
            opacity: 1,
            visibility: "visible",
            pointerEvents: "auto",
            transform: "translateY(0)",
        },
        _motionReduce: {
            transition: "none",
        },
    },
    mobileLink: {
        fontSize: "xs",
        textTransform: "uppercase",
        paddingX: 2,
        _hover: {
            textDecoration: "none",
            color: "accent-pink-color",
        },
    },
} as const satisfies GlobalStyleObject;
