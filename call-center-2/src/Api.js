import CallPhone from "./components/CallPhone";

const searchSub = async (key) => {
  let url = "http://localhost:8080/subscribers";
  if (key !== null && key !== undefined && key !== "") {
    url += "/sub?nome=" + key;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteSub = async (id) => {
  let url = "http://localhost:8080/subscribers";
  if (id !== null && id !== undefined && id !== "") {
    url += "/delite/" + id;
  }
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const insertSub = async (subscribers) => {
  let url = "http://localhost:8080/subscribers";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscribers),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const insertPhonecall = async (id) => {
  let url = "http://localhost:8080/phonecalls";
  if (id !== null && id !== undefined && id !== "") {
    url += "/" + id;
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CallPhone),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error");
  }
};

const getallPhonecalls = async () => {
  let url = "http://localhost:8080/phonecalls";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error");
  }
};

export { getallPhonecalls };
export { insertPhonecall };
export { insertSub };
export { deleteSub };
export { searchSub };
