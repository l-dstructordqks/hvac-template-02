import {
  Html,
  Body,
  Container,
  Heading,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  phone: string;
  service: string;
  requestType: string;
  preferredDate: string;
  message: string;
}

export default function LeadNotification(props: Props) {
  return (
    <Html>
      <Body
        style={{
          backgroundColor: "#f8f9fc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "32px",
            borderRadius: "12px",
          }}
        >
          <Heading style={{ color: "#0f3460" }}>
            New Service Request
          </Heading>

          <Text>
            A customer has submitted a request through the website.
          </Text>

          <Hr />

          <Section>
            <Heading as="h2">Customer Information</Heading>

            <Text>
              <strong>Name:</strong> {props.name}
            </Text>

            <Text>
              <strong>Email:</strong> {props.email}
            </Text>

            <Text>
              <strong>Phone:</strong> {props.phone}
            </Text>
          </Section>

          <Hr />

          <Section>
            <Heading as="h2">Service Details</Heading>

            <Text>
              <strong>Service:</strong> {props.service}
            </Text>

            <Text>
              <strong>Request Type:</strong> {props.requestType}
            </Text>

            <Text>
              <strong>Preferred Date:</strong> {props.preferredDate}
            </Text>
          </Section>

          <Hr />

          <Section>
            <Heading as="h2">Message</Heading>

            <Text>{props.message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}