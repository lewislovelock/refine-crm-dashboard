import { Text } from "@/components/text"

import { AccordionHeaderSkeleton } from "./accordion-header-skeleton"

type Props = React.PropsWithChildren<{
    accodionKey: string;
    activeKey?: string;
    setActive: (key?: string) => void;
    fallback: string | React.ReactNode;
    isLoading?: boolean;
    icon: React.ReactNode;
    label: string;
}>

/**
 * when activeKey is equal to accordionKey, the children will be rendered. Otherwise, the fallback will be rendered
 * when isLoading is true, the <AccordionHeaderSkeleton /> will be rendered
 * when Accordion is clicked, setActive will be called with the accordionKey
 */

export const Accordion = ({
    accodionKey,
    activeKey,
    setActive,
    fallback,
    isLoading,
    icon,
    label,
    children
}: Props) => {
    if (isLoading) return <AccordionHeaderSkeleton />

    const isActive = activeKey === accodionKey;

    const toggleAccordion = () => {
        if (isActive) {
            setActive(undefined)
        }
        else {
            setActive(accodionKey)
        }
    };

    return (
        <div
        style={{
            display: "flex",
            padding: "12px 24px",
            gap: "12px",
            alignItems: "start",
            borderBottom: "1px solid #d9d9d9",
          }}
        >
            <div style={{ marginTop: "1px", flexShrink: 0 }}>{icon}</div>
            {isActive ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        flex: 1,
                    }}
                >
                    <Text strong onClick={toggleAccordion} style={{ cursor: "pointer" }}>
                        {label}
                    </Text>
                    {children}
                </div>
            ) : (
                <div onClick={toggleAccordion} style={{ cursor: "pointer", flex: 1 }}>
                    {fallback}
                </div>
            )} 
        </div>
    )
}