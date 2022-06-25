import crypto, { KeyObject } from 'crypto';
import * as fs from 'fs';

export const createRsaKeyPair = async (name: string, dirToSave?: string) => {
  const keys = await new Promise<{ publicKey: string; privateKey: string }>((res, rej) =>
    crypto.generateKeyPair(
      'rsa',
      {
        modulusLength: 4096,
        publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
        privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
      },
      (err, publicKey, privateKey) => {
        if (err) rej(err);
        res({ publicKey, privateKey });
      },
    ),
  );
  if (dirToSave) {
    if (!fs.existsSync(dirToSave)) {
      fs.mkdirSync(dirToSave, { recursive: true });
    }
    await new Promise((res, rej) =>
      fs.writeFile(`${dirToSave}/${name}.pub`, keys.publicKey, (err) =>
        err ? rej() : res(true),
      ),
    );
    await new Promise((res, rej) =>
      fs.writeFile(`${dirToSave}/${name}.pem`, keys.privateKey, (err) =>
        err ? rej() : res(true),
      ),
    );
    return keys;
  }
};
