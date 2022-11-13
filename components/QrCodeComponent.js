import QRCode from "react-qr-code";
import React from 'react';

const QrCodeComponent = ({ content , size }) => {
    return (
      <QRCode value={content} size={size || 200 } />
    );
};


export default QrCodeComponent;