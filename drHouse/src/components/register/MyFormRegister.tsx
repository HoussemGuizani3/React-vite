import { Title } from '../shared/title/Title.tsx'
import { InputField } from '../shared/input/InputField.tsx';
import { PrimaryButton } from '../shared/button/PrimaryButton.tsx';
import { Selector } from '../shared/selector/Selector.tsx'
import { Country } from 'country-state-city';
import styled from 'styled-components';
import { useState } from 'react';
import validator from 'validator';
import { GoStop } from "react-icons/go";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 500px;
    margin-top:47px;
`;
const CountryDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap:4px;
`;
const Error = styled.span`
    color: red;
    font-size: 12px;
    margin-top: 4px;
    display: flex;
    flex-direction: row;
    gap:4px;
`;


interface FormState {
    firstname: string;
    lastname: string;
    age: string;
    country: string;
    mobile: string;
    email: string;
    password: string;
    comfirmpassword: string;
}

interface CountryOption {
    id: string;
    name: string;
}
export const MyFormRegister: React.FunctionComponent =  () => {

    const allCountries: CountryOption[] = Country.getAllCountries().map(c => ({
        id: c.isoCode,
        name: c.name
    }));


    const [form, setForm] = useState<FormState>({
        firstname: '',
        lastname: '',
        age: '',
        country: '#',
        mobile: '',
        email: '',
        password: '',
        comfirmpassword: ''

    });

    const [errors, setErrors] = useState<FormState>({
        firstname: '',
        lastname: '',
        age: '',
        country: '',
        mobile: '',
        email: '',
        password: '',
        comfirmpassword: '',

    });

    const [borders, setBorders] = useState<FormState>({
        firstname: '1px solid #cbd5e1',
        lastname: '1px solid #cbd5e1',
        age: '1px solid #cbd5e1',
        country: '1px solid #cbd5e1',
        mobile: '1px solid #cbd5e1',
        email: '1px solid #cbd5e1',
        password: '1px solid #cbd5e1',
        comfirmpassword: '1px solid #cbd5e1'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleValidation = (e: React.MouseEvent<HTMLButtonElement>) => {
         e.preventDefault;
        let newErrors: FormState = { ...errors };
        let newBorders: FormState = { ...borders };

        //check first name
        if (validator.isEmpty(form.firstname)) {
            newErrors.firstname = 'First name is required.';
            newBorders.firstname = '1px solid red';
        } else if (!validator.isAlpha(form.firstname, 'fr-FR', { ignore: ' ' })) {
            newErrors.firstname = "Please enter a valid first name using letters only.";
            newBorders.firstname = '1px solid red';
        } else {
            newBorders.firstname = '1px solid green';
            newErrors.firstname = '';

        }

        // 2. check last name
        if (validator.isEmpty(form.lastname)) {
            newErrors.lastname = 'Last name is required.';
            newBorders.lastname = '1px solid red';
        } else if (!validator.isAlpha(form.lastname, 'fr-FR', { ignore: ' ' })) {
            newErrors.lastname = "Please enter a valid last name using letters only.";
            newBorders.lastname = '1px solid red';
        } else {
            newBorders.lastname = '1px solid green';
            newErrors.lastname = '';
        }

        // 3. check age 
        const ageNum = Number(form.age);
        if (!form.age || isNaN(ageNum)) {
            newErrors.age = "Age is required";
            newBorders.age = '1px solid red';
       } else if (ageNum < 18 || ageNum > 70) {
            newErrors.age = "Please enter a valid age between 18 and 70.";
            newBorders.age = '1px solid red';
        } else {
            newBorders.age = '1px solid green';
            newErrors.age = '';
        }

        // 4. check country
        if (form.country === '#') {
            newErrors.country = "Please select a country";
            newBorders.country = '1px solid red';
        } else {
            newBorders.country = '1px solid green';
            newErrors.country = '';

        }

        // 5. check mobile
        if (validator.isEmpty(form.mobile)) {
            newErrors.mobile = "Mobile number is required";
            newBorders.mobile = '1px solid red';
        } else if (!validator.isMobilePhone(form.mobile)) {
            newErrors.mobile = "Please enter a valid mobile number";
            newBorders.mobile = '1px solid red';
        } else {
            newBorders.mobile = '1px solid green';
            newErrors.mobile = '';
        }

        // 6. check email
        if (validator.isEmpty(form.email)) {
            newErrors.email = "Email is required";
            newBorders.email = '1px solid red';
        } else if (!validator.isEmail(form.email)) {
            newErrors.email = "Please enter a valid email format";
            newBorders.email = '1px solid red';
        } else {
            newBorders.email = '1px solid green';
            newErrors.email = '';
        }

        // 7. check password
        if (validator.isEmpty(form.password)) {
            newErrors.password = "Password is required";
            newBorders.password = '1px solid red';
        } else if (!validator.isStrongPassword(form.password)) {
            newErrors.password = "Please enter a combination of at least 8 numbers, letters, and symbols.";
            newBorders.password = '1px solid red';
        } else {
            newBorders.password = '1px solid green';
            newErrors.password = '';
        }

        // 8. check confirm password
        if (validator.isEmpty(form.comfirmpassword)) {
            newErrors.comfirmpassword = "Comfirm Password is required";
            newBorders.comfirmpassword = '1px solid red';
        } else if (form.password !== form.comfirmpassword) {
            newErrors.comfirmpassword = "Passwords do not match";
            newBorders.comfirmpassword = '1px solid red';
        } else {
            newBorders.comfirmpassword = '1px solid green';
            newErrors.comfirmpassword = '';
        }

        setErrors(newErrors);
        setBorders(newBorders);
    }

    const isButtonDisabled = () => {

        if ((validator.isEmpty(form.firstname)) ||
            (validator.isEmpty(form.lastname)) ||
            (validator.isEmpty(form.age)) ||
            (validator.isEmpty(form.mobile)) ||
            (form.country === '#') ||
            (validator.isEmpty(form.email)) ||
            (validator.isEmpty(form.password)) ||
            (validator.isEmpty(form.comfirmpassword))
        ) {
            return true;
        }
        return false;
    }


    return (

        <Form method="POST">
            <InputField label="First Name"
                type="text"
                placeholder="First Name"
                value={form.firstname}
                name="firstname"
                onChange={handleChange}
                error={errors.firstname}
                border={borders.firstname}
            />

            <InputField label="Last Name"
                type="text"
                placeholder="Last Name"
                value={form.lastname}
                name="lastname"
                onChange={handleChange}
                error={errors.lastname}
                border={borders.lastname}
            />
            <InputField label="Age"
                type="number"
                placeholder="0"
                value={form.age}
                name="age"
                onChange={handleChange}
                error={errors.age}
                border={borders.age}
            />
            <CountryDiv>
                <Title text='Country' size="14px" weight="600" />
                <Selector
                    label="Country"
                    name="country"
                    options={allCountries}
                    value={form.country}
                    onChange={handleChange}
                    bgColor="white"
                    color='#666666'
                    border={borders.country}
                    height='48px'
                    radius='12px'
                />
                <Error>
                    {errors.country && <GoStop color='red' />}
                    {errors.country}
                </Error>

            </CountryDiv>
            <InputField label="Mobile number"
                type="number"
                placeholder="1234567890"
                value={form.mobile}
                name="mobile"
                onChange={handleChange}
                error={errors.mobile}
                border={borders.mobile}
            />
            <InputField label="Email"
                type="email"
                placeholder="iteezexq@gmail.com"
                value={form.email}
                name="email"
                onChange={handleChange}
                error={errors.email}
                border={borders.email}
            />
            <InputField label="Password"
                type="password"
                placeholder="••••••••••••"
                value={form.password}
                name="password"
                onChange={handleChange}
                error={errors.password}
                border={borders.password}
            />
            <InputField label="Comfirm Password"
                type="password"
                placeholder="••••••••••••"
                value={form.comfirmpassword}
                name="comfirmpassword"
                onChange={handleChange}
                error={errors.comfirmpassword}
                border={borders.comfirmpassword}
            />
            <PrimaryButton 
                type="button"
                onClick={handleValidation}
                disabled={isButtonDisabled()}
                cursor={isButtonDisabled() ? 'not-allowed' : 'pointer'}
                text='Create an account'
                width='100%'
                height='50px'
                radius='32px'
                bgColor={isButtonDisabled() ? '#c3c8cf' : '#4A7FA7'}
            />
        </Form>


    );
}