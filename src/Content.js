import { Container } from '@material-ui/core';
import React from 'react';
import Rank from "./Rank.js";
import './Content.css';

export default function Content() {
  return (
    <Container maxWidth="md" className="container">
      <Rank />
    </Container>
  );
}
