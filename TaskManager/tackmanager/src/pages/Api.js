const BASE_URL_USERS = "http://localhost:8080/api/v1/users";

export const getUsers = async () => {
  try {
    const response = await fetch(BASE_URL_USERS);
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const postUser = async (user) => {
  try {
    const response = await fetch(BASE_URL_USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return { ok: response.ok, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const deleteUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL_USERS}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};