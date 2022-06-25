import faker from '@faker-js/faker';
import crypto from 'crypto';
import { writeFileSync } from 'fs';
import path from 'path';
import fakeData from '../fakeData.json';

export const rsaDecrypt = (encryptedData: Buffer, privateKey: string) => {
  const decryptedData = crypto.privateDecrypt(
    {
      key: privateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    encryptedData,
  );
  return decryptedData;
};

export const rsaEncrypt = (data: string, publicKey: string) => {
  const ecryptedData = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256',
    },
    // We convert the data string to a buffer using `Buffer.from`
    Buffer.from(data),
  );
  return ecryptedData;
};

if (require.main === module) {
  // const randall = fakeData.votantes.find((v) => v.credencial === 'XDOQGR21630');
  // const circuito = fakeData.circuitos.find((c) => c.id === randall?.circuitoId);
  // const lista = fakeData.listas[0];
  // writeFileSync(
  //   path.resolve(__dirname, '../randallVotoEncriptado.txt'),
  //   rsaEncrypt(`${lista.id}:${faker.datatype.uuid()}`, circuito!.publicKey).toString('base64'),
  // );
  const voto = "pBxmuzjT12bo+dZlHSYeleusJUEot7wBsaAH20ui6hBQR3iwTcpTHGVt2ZjnZx90cwF4+UDFvsIHt21XlAgUUYHkrOh0JgF50WU29TYOUbKUiKWuSCzMFmt0d9d+1P8iDv87UsYoWTGjfNcmRm6BbZRngSqLltuKfqMS6tubTm78rRyl1+2LgBEIFrmkLdSRT+SBPiqMvsN+7fd7YSCkYgRhvC+Q13mpoGi5PjSaPUiSk9fbIhBp6KyasFtJmaO3yfwlkUEqkg9+q/WoXlKUmRva9SVKQa2ajNSHk98w/o/Dzz7/JP0VFvioEtulmZEoFvp86Lt9efJI0HMIaQaQf8o+RwVh6F5WceKr8FoV84IeczYfta+74oI4laQJxabv4G5cFfBxLrq+kvhQyYBUaNLCnkJ5TfVr/QMa1R3xdiaPWW09JpUo4IVp3vDsg+T5V3BYmfUuArAFcVUxSCH98Hw1vy5Tx/ymShHqzLeh2b8zy9Uil4tup9QgYfU9Lo3zhOWy8lnM5x/uZfcB1XhQTFS8Nhzm2tSdyclGoiuLm3qYf/snugukxqM2jmOh24x3mhEHncjYAPO1+3C3iY9Qpmrw6j+CVvQFi8IF1+jLHrx2J9RwWOU+1nZBOZtlDmoNT6dB3xh6Ik2q76TvcWgWb499b8AIWNfpNq+FJyCm4eM="
  const secretKey = `-----BEGIN RSA PRIVATE KEY-----\n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\n-----END RSA PRIVATE KEY-----`
  console.log(rsaDecrypt(Buffer.from(voto, 'base64'), secretKey).toString());
}
