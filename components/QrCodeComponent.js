import QRCode from "react-qr-code";
import React from 'react';

const QrCodeComponent = ({ content }) => {
    return (
      <QRCode value={content} size={200} />
    );
};


export default QrCodeComponent;