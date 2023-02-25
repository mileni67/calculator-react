import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { StyledForm, LabelText, Field, StyledButton, } from "./styled";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <StyledForm onSubmit={onSubmit}>
            <p>
                <label>
                    <LabelText>
                        Kwota w zł*:
                    </LabelText>
                    <Field
                        as="input"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        step="0.01"
                        placeholder="Wpisz kwotę w zł"
                        required
                        min="0.1"
                    />
                </label>
            </p>
            <p>
                <label>
                    <LabelText>
                        Waluta:
                    </LabelText>
                    <Field
                        as="select"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )))}
                    </Field>
                </label>
            </p>
            <p>
                <StyledButton
                    as="button">Przelicz!
                </StyledButton>
            </p>

            <p className="form__info">
                Kursy pochodzą  ze strony nbp.pl z dnia 2022-02-15
            </p>
            <Result result={result} />
        </StyledForm>
    );

};
