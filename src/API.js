// const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";
const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

export async function getTasks({ token }) {
  const responce = await fetch(baseHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!responce.status === 200) {
    throw new Error("Ошибка");
  }
  const data = await responce.json();
  return data;
}

export async function fetchReg({ login, name, password }) {
  const response = await fetch(userHost, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });
  if (response.status === 400) {
    throw new Error("Такой пользователь уже существует");
  }
  return await response.json();
}

export async function fetchLogin({ login, password }) {
  const response = await fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  if (response.status === 403) {
    throw new Error("Неверный логин или пароль");
  }
  return await response.json();
}
