import { CreditCard, IconProps } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { CardSelectorContainer } from "./styles";

interface PaymentOptionCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    content: string;
    Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    selected?: boolean
}

export function PaymentOptionCard({ content, Icon, selected = false, ...props }: PaymentOptionCardProps) {
    return (
        <CardSelectorContainer selected={selected} type={"button"} {...props}>
            <Icon size={16} /> {content}
        </CardSelectorContainer>
    )
}