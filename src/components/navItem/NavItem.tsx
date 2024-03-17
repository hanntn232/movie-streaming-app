import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import "./NavItem.css";

type NavItemProps = {
  iconClass: string;
  itemName: string;
};

const StyledColItem = styled(Row)`
  padding: 0;
`;

export default function NavItem({ iconClass, itemName }: NavItemProps) {
  return (
    <Container className="container">
        <Row xs={"auto"} md={"auto"} lg={"auto"} className="row">
          <StyledColItem>
            <i className={`${iconClass} icon`}></i>
          </StyledColItem>
          <Col>
            <p>{itemName}</p>
          </Col>
        </Row>
    </Container>
  );
}
