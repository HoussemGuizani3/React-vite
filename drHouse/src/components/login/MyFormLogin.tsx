import { InputField } from '../shared/input/InputField';
import { PrimaryButton } from '../shared/button/PrimaryButton';
import styled from 'styled-components';
import { useState } from 'react';
import validator from 'validator';

interface FormState {
    email: string;
    password: string;
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 500px;
    margin-top: 32px;
`;
/*
const Error = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 4px;
`;
*/
export const MyFormLogin = () => {
    const [form, setForm] = useState<FormState>({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState<FormState>({
        email: '',
        password: ''
    });

    const [borders, setBorders] = useState<FormState>({
        email: '1px solid #cbd5e1',
        password: '1px solid #cbd5e1'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleValidation = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        let newErrors: FormState = { email: '', password: '' };
        let newBorders = { email: '1px solid #cbd5e1', password: '1px solid #cbd5e1' };

        // 1. Check Email
        if (validator.isEmpty(form.email)) {
            newErrors.email = "Email is required";
            newBorders.email = '1px solid red';
        } else if (!validator.isEmail(form.email)) {
            newErrors.email = "Please enter a valid email format";
            newBorders.email = '1px solid red';
        } else {
            newBorders.email = '1px solid green';
        }

        // 2. Check Password
        if (validator.isEmpty(form.password)) {
            newErrors.password = "Password is required";
            newBorders.password = '1px solid red';
        } else if (!validator.isStrongPassword(form.password)) {
            newErrors.password = "Please enter a combination of at least 8 numbers, letters, and symbols.";
            newBorders.password = '1px solid red';
        } else {
            newBorders.password = '1px solid green';
        }

        setErrors(newErrors);
        setBorders(newBorders);
    };

    const isButtonDisabled = () => {
        return form.email === '' || form.password === '';
    };

    return (
        <Form method='POST'>
            <InputField 
                label="Email"
                type="email"
                placeholder="iteezexq@gmail.com"
                value={form.email}
                name="email"
                onChange={handleChange}
                error={errors.email}
                border={borders.email}
            />
            <InputField 
                label="Password"
                type="password"
                placeholder="••••••••••••"
                value={form.password}
                name="password"
                onChange={handleChange}
                error={errors.password}
                border={borders.password}
            />

            <PrimaryButton 
                type="button"
                onClick={handleValidation}
                disabled={isButtonDisabled()}
                cursor={isButtonDisabled() ? 'not-allowed' : 'pointer'}
                text='Log in'
                width='100%'
                height='50px'
                radius='32px'
                bgColor={isButtonDisabled() ? '#c3c8cf' : '#4A7FA7'}
            />
        </Form>
    );
};