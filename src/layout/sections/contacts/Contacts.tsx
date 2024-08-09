import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";

import { S } from "./Contacts_Styles";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    message: Yup.string()
        .min(10, 'Too Short!')
        .max(1000, 'Too Long!')
        .required('Required'),
});

export const Contact: React.FC = () => {
    const [status, setStatus] = React.useState<{
        success: string | null;
        error: string | null;
    }>({ success: null, error: null });

    const sendEmail = async (values: any, actions: any) => {
        try {
            await emailjs.send(
                'service_4h2f0an',
                'template_c7ks92i',
                values,
                '9qlrZzbPtRamXDbJE'
            );
            setStatus({ success: 'Your message has been sent successfully!', error: null });
            actions.resetForm();
        } catch (error) {
            setStatus({ success: null, error: 'Failed to send message. Please try again.' });
        }
        actions.setSubmitting(false);
    };

    return (
        <Container>
            <SectionTitle>For any questions please contact me:</SectionTitle>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={sendEmail}
            >
                {({ isSubmitting }) => (
                    <S.Form as={Form}>
                        <S.FormGroup>
                            <S.Label htmlFor="name">Name:</S.Label>
                            <Field
                                as={S.Field}
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name" />
                            <ErrorMessage name="name" component={S.ErrorText} />
                        </S.FormGroup>
                        <S.FormGroup>
                            <S.Label htmlFor="email">Email:</S.Label>
                            <Field
                                as={S.Field}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@example.com"
                            />
                            <ErrorMessage name="email" component={S.ErrorText} />
                        </S.FormGroup>
                        <S.FormGroup>
                            <S.Label htmlFor="message">Message:</S.Label>
                            <Field
                                as={S.Textarea}
                                id="message"
                                name="message"
                                placeholder="Your message here..."
                            />
                            <ErrorMessage name="message" component={S.ErrorText} />
                        </S.FormGroup>
                        <S.Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send message'}
                        </S.Button>
                        {status.success && <p style={{ color: 'green' }}>{status.success}</p>}
                        {status.error && <p style={{ color: 'red' }}>{status.error}</p>}
                    </S.Form>
                )}
            </Formik>
        </Container>
    );
};