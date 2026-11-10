import type { GlobalStyleObject } from "@chakra-ui/react";
import { accentHover } from "@/charka/shared";

const gradientText = {
    fontWeight: "600",
    lineHeight: "1.1",
    textTransform: "uppercase",
    bgGradient: "to-r",
    gradientFrom: "accent-pink-color",
    gradientTo: "accent-blue-color",
    bgClip: "text",
    color: "transparent",
} as const;

const accentIcon = {
    boxSize: 6,
    color: "accent-blue-color",
    filter: "drop-shadow(0 0 6px var(--accent-blue-color))",
} as const;

const list = {
    display: "flex",
    listStyle: "none",
} as const;

const section = {
    flexDir: "column",
    width: "full",
    borderBottom: "1px solid",
    borderColor: "border-color",
} as const;

export const styles = {
    heroSection: {
        ...section,
        justifyContent: "space-between",
        clipPath: "inset(0 -100vh 0 -100vw)",
    },
    section: {
        ...section,
        paddingY: { base: 12, md: 20 },
        gap: { base: 10, md: 20 },
    },
    imageBox: {
        position: "relative",
        alignSelf: "flex-end",
        right: 0,
        bottom: 0,
        alignItems: "flex-end",
        isolation: "isolate",
        _before: {
            content: '""',
            position: "absolute",
            zIndex: -1,
            pointerEvents: "none",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, color-mix(in srgb, var(--accent-blue-color) 15%, transparent) 0%, transparent 65%)"
        },
        _after: {
            content: '""',
            position: "absolute",
            zIndex: -1,
            pointerEvents: "none",
            width: "500px",
            height: "500px",
            right: "20%",
            bottom: "-200px",
            background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent-pink-color) 15%, transparent) 0%, transparent 70%)",
        },
    },
    image: {
        width: "450px",
        height: "auto",
    },
    content: {
        flexDir: "column",
        alignItems: { base: "center", sm: "flex-start" },
        textAlign: { base: "center", sm: "left" },
        justifyContent: "flex-start",
        gap: { base: 6, md: 8 },
        maxWidth: "600px",
        paddingY: { base: 10, md: 16 },
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
    },
    heroTitle: {
        ...gradientText,
        fontSize: { base: "4xl", md: "5xl" },
    },
    heroText: {
        fontSize: { base: "md", md: "xl" },
        lineHeight: "1.5",
        fontWeight: 600,
    },
    actions: {
        flexWrap: "wrap",
        gap: 6,
    },
    button: {
        paddingX: 5,
        borderRadius: "xl",
        fontSize: "sm",
        fontWeight: "600",
        textTransform: "uppercase",
        color: "white",
        bgGradient: "to-r",
        gradientFrom: "accent-pink-color",
        gradientTo: "accent-blue-color",
        backgroundOrigin: "border-box",
    },
    sectionTitle: {
        ...gradientText,
        width: "fit-content",
        fontSize: { base: "3xl", md: "4xl" },
        alignSelf: { base: "center", sm: "flex-start" },
        textAlign: { base: "center", sm: "left" },
    },
    card: {
        layerStyle: "card",
        flexDir: "column",
        gap: 4,
    },
    accentIcon,
    servicesList: {
        flexDir: "column",
        alignItems: { base: "stretch", md: "flex-start" },
    },
    serviceCard: {
        width: { base: "100%", md: "64%" },
    },
    serviceCardRight: {
        alignSelf: { base: "stretch", md: "flex-end" },
    },
    serviceHeader: {
        alignItems: "center",
        gap: 4,
    },
    serviceConnector: {
        width: "1px",
        height: { base: 8, md: "60px" },
        marginLeft: { base: "50%", md: "calc(36% + 30px)" },
        background: "border-color",
    },
    introText: {
        fontSize: { base: "lg", md: "2xl" },
        fontWeight: "600",
        textAlign: "center",
    },
    skillContent: {
        flexDir: "column",
        alignItems: "center",
        gap: { base: 8, md: 10 },
    },
    skillList: {
        ...list,
        flexDir: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: { base: 6, md: 10 },
        maxWidth: "820px",
    },
    skillIcon: {
        boxSize: { base: "40px", md: "56px" },
    },
    contactBoxes: {
        flexDir: { base: "column", md: "row" },
        gap: { base: 4, md: 6 },
    },
    contactBox: {
        flex: 1,
    },
    contactList: {
        ...list,
        flexDir: "column",
        gap: 3,
    },
    contactItem: {
        display: "flex",
        alignItems: "center",
        gap: 3,
        textStyle: "bodyText",
    },
    contactIcon: {
        ...accentIcon,
        boxSize: 5,
    },
    socialList: {
        ...list,
        flexDir: "row",
        gap: 5,
    },
    link: {
        _hover: accentHover,
    },
    socialLink: {
        color: "accent-blue-color",
        _hover: {
            color: "accent-pink-color",
        },
    },
    socialIcon: {
        boxSize: 7,
        filter: "drop-shadow(0 0 6px currentColor)",
    },
    copyright: {
        fontSize: "xs",
        paddingY: 3
    }
} as const satisfies GlobalStyleObject;
