import bcrypt from 'bcryptjs';

const hash = '$2b$12$5cMoOo2Kcb/wswEBzv.QS.e9Vbdd4Rbrl2CKly.DiM7OQhNbLj2NS';

const func = async () => {
  const ok = await bcrypt.compare('test1234', hash);
  console.log(ok); // true or false
};

func().then();
