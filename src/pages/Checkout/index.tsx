import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash, Watch } from "phosphor-react";
import { PaymentOptionCard } from "../../components/PaymentOptionCard";
import {
    CheckoutSubtitle,
    CheckoutContainer,
    CheckoutForm,
    Input,
    InputRua,
    InputComplemento,
    CheckoutShoppingListContainer,
    InputUF,
    CheckoutFormTitle,
    CheckoutPaymentSectionTitle,
    CheckoutPaymentOptions,
    CheckoutShoppingListItem,
    CheckoutShoppingListItemInfo,
    CheckoutShoppingListItemPrice,
    CheckoutShoppingListTotalContainer,
    CheckoutFormContainer,
    CheckoutPaymentContainer,
    CheckoutShoppingListInfo,
    CheckoutShoppingListTotal,
    ConfirmButton,
    CheckoutPedidoContainer,
    RemoveButton,
    OptionsContainer
} from "./styles";
import { QuantityButton } from "../../components/QuantityButton";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";


export function Checkout() {
    const { cartState, handleRemoveButton, handleConfirmDelivery } = useContext(CartContext);



    function setPriceToLabel(value: number) {
        let totalPrice = String(value);
        if (totalPrice.indexOf('.') === -1) {
            totalPrice = totalPrice + '.00';
        }
        const totalDecimals = totalPrice.substring(totalPrice.indexOf('.') + 1).padEnd(2, '0');
        const totalWithoutDecimals = totalPrice.substring(0, totalPrice.indexOf('.'));
        const totalLabel = totalWithoutDecimals + ',' + totalDecimals;
        return totalLabel;
    }

    const totalItens = setPriceToLabel(cartState.totalPrice);
    const total = setPriceToLabel(cartState.totalPrice + 3.50);

    const { register, handleSubmit, watch } = useForm();

    const cep = watch('cep');
    const rua = watch('rua');
    const numero = watch('numero');
    const bairro = watch('bairro');
    const cidade = watch('cidade');
    const uf = watch('uf');

    const isSubmitDisabled = !cep || !rua || !numero || !bairro || !cidade || !uf;

    const navigate = useNavigate();

    function handleConfirmDeliveryButton(data: any) {
        handleConfirmDelivery();
        navigate('/success', {
            state:
            {
                paymentOption: paymentSelected,
                ...data
            }
        });
    }

    function handlePaymentSelection(option: paymentOptionsType) {
        setPaymentSelected(option);
    }
    enum paymentOptions {
        CREDIT = "CREDIT",
        DEBIT = "DEBIT",
        MONEY = "MONEY"
    }
    type paymentOptionsType = keyof typeof paymentOptions;
    const [paymentSelected, setPaymentSelected] = useState<paymentOptionsType>(paymentOptions.CREDIT);


    return (
        <form onSubmit={handleSubmit(handleConfirmDeliveryButton)}>
            <CheckoutContainer>

                <CheckoutSubtitle>Complete seu pedido</CheckoutSubtitle>
                <CheckoutSubtitle>Cafés selecionados</CheckoutSubtitle>
                <CheckoutPedidoContainer>
                    <CheckoutFormContainer>
                        <CheckoutFormTitle>
                            <MapPinLine size={22} />
                            <div>
                                <p> Endereço de Entrega</p>
                                <span>Informe o endereço onde deseja receber seu pedido</span>
                            </div>

                        </CheckoutFormTitle>
                        <CheckoutForm>
                            <Input placeholder="CEP" id="cep" {...register('cep')} />
                            <InputRua placeholder="Rua" id="rua" {...register('rua')} />
                            <Input placeholder="Número" id="numero" {...register('numero')} />
                            <InputComplemento placeholder="Complemento" id="complemento" {...register('complemento')} />
                            <Input placeholder="Bairro" id="bairro" {...register('bairro')} />
                            <InputComplemento placeholder="Cidade" id="cidade" {...register('cidade')} />
                            <InputUF placeholder="UF" id="uf" {...register('uf')} />
                        </CheckoutForm>
                    </CheckoutFormContainer>
                    <CheckoutPaymentContainer>
                        <CheckoutPaymentSectionTitle>
                            <CurrencyDollar size={22} />
                            <div>
                                <p>Pagamento</p>
                                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                            </div>
                        </CheckoutPaymentSectionTitle>
                        <CheckoutPaymentOptions>
                            <PaymentOptionCard content="CARTÃO DE CRÉDITO"
                                Icon={CreditCard}
                                selected={paymentSelected === paymentOptions.CREDIT}
                                onClick={() => handlePaymentSelection(paymentOptions.CREDIT)} />
                            <PaymentOptionCard content="CARTÃO DE DÉBITO"
                                Icon={Bank}
                                selected={paymentSelected === paymentOptions.DEBIT}
                                onClick={() => handlePaymentSelection(paymentOptions.DEBIT)} />
                            <PaymentOptionCard content="DINHEIRO"
                                Icon={Money}
                                selected={paymentSelected === paymentOptions.MONEY}
                                onClick={() => handlePaymentSelection(paymentOptions.MONEY)} />
                        </CheckoutPaymentOptions>

                    </CheckoutPaymentContainer>
                </CheckoutPedidoContainer>


                <CheckoutShoppingListContainer>
                    {cartState.coffees.map(coffee => coffee.quantity > 0 &&

                        <CheckoutShoppingListItem key={coffee.id}>
                            <CheckoutShoppingListItem>
                                <img src={coffee.image} alt="" />
                                <CheckoutShoppingListItemInfo>

                                    <span>{coffee.name}</span>
                                    <OptionsContainer>
                                        <QuantityButton quantity={coffee.quantity} coffeeId={coffee.id} />
                                        <RemoveButton onClick={() => handleRemoveButton(coffee.id)}><Trash size={16} />REMOVER</RemoveButton>
                                    </OptionsContainer>
                                </CheckoutShoppingListItemInfo>
                            </CheckoutShoppingListItem>
                            <CheckoutShoppingListItemPrice>R$ {coffee.price.replace(".", ",")}</CheckoutShoppingListItemPrice>
                        </CheckoutShoppingListItem>
                    )}


                    <CheckoutShoppingListTotalContainer>
                        <CheckoutShoppingListInfo>
                            <label>Total de itens</label>
                            <span>R$ {cartState.totalPrice === 0 ? 0 : totalItens}</span>
                        </CheckoutShoppingListInfo>
                        <CheckoutShoppingListInfo>
                            <label>Entrega</label>
                            <span>R$ 3,50</span>
                        </CheckoutShoppingListInfo>
                        <CheckoutShoppingListTotal>
                            <span>Total</span>
                            <span>R$ {cartState.totalPrice === 0 ? 0 : total}</span>
                        </CheckoutShoppingListTotal>

                        <ConfirmButton type="submit" disabled={isSubmitDisabled || cartState.totalPrice === 0}>CONFIRMAR PEDIDO</ConfirmButton>
                    </CheckoutShoppingListTotalContainer>
                </CheckoutShoppingListContainer>


            </CheckoutContainer>
        </form>
    )
}