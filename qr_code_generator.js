import QRCode from 'qrcode';

export function generateQRCode(data) {
    return new Promise((resolve, reject) => {
        QRCode.toDataURL(data, function (err, url) {
            if (err) reject(err);
            resolve(url);
        });
    });
}