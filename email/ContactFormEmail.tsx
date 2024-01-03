import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';

import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export const ContactFormEmail = ({
  message,
  senderEmail,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje desde tu portafolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Has recibido el siguiente mensaje del formulario de contacto
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Correo electrónico remitente: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
