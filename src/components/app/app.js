import React from 'react';
import './style.css';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantages from '../../mocks/advantagesList';

export default function App() {
  return <PageWrapper advantages={advantages} />;
}
