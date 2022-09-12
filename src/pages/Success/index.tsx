import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { IconContainer, ImageContainer, InfoContainer, InfoItem, ItemContent, Subtitle, SuccessContainer, Title, TitleContainer } from "./styles";
import DeleveryIllustration from '../../assets/Illustration.svg'
import { useLocation } from "react-router-dom";

export function Success() {
    const { state } = useLocation();
    enum paymentOption {
        "CREDIT" = "Cartão de Crédito",
        "DEBIT" = "Cartão de Débito",
        "MONEY" = "Dinheiro"
    }
    interface dataType {
        rua: String,
        cep: String,
        numero: String,
        bairro: String,
        cidade: String,
        uf: String,
        complemento?: String
        paymentOption: keyof typeof paymentOption;
    }

    const obj: dataType = state as dataType;
    return (
        <SuccessContainer>

            <TitleContainer>
                <Title>Uhu! Pedido confirmado</Title>
                <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
            </TitleContainer>
            <InfoContainer>
                <div>
                    <InfoItem>
                        <div>
                            <IconContainer iconColor="purple"><MapPin size={16} weight={"fill"} /></IconContainer>
                        </div>
                        <ItemContent>
                            <span>
                                Entrega em <b>{obj.rua}, {obj.numero}</b>
                            </span>
                            <span>{obj.bairro} - {obj.cidade}, {obj.uf}</span>
                        </ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <div>
                            <IconContainer iconColor="yellow"><Timer size={16} weight={"fill"} /></IconContainer>
                        </div>
                        <ItemContent>
                            <span>
                                Previsão de entrega
                            </span>
                            <span><b>20 min - 30 min</b></span>
                        </ItemContent>
                    </InfoItem>
                    <InfoItem>
                        <div>
                            <IconContainer iconColor="yellowDark"><CurrencyDollar size={16} weight={"fill"} /></IconContainer>
                        </div>
                        <ItemContent>
                            <span>
                                Pagamento na entrega
                            </span>
                            <span><b>{paymentOption[obj.paymentOption]}</b></span>
                        </ItemContent>
                    </InfoItem>
                </div>

            </InfoContainer>
            <ImageContainer>
                <img src={DeleveryIllustration} alt="" />
            </ImageContainer>

        </SuccessContainer>
    )
}