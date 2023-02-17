const searchSub = async (key) => {
  let url = "http://localhost:8080/subscribers";
  if (key !== null && key !== undefined && key !== "") {
    url += "/sub?nome=" + key;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
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
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const insertSub = async () => {
  let url = "http://localhost:8080/subscribers";
  try {
    const response = await fetch(url, {
      method: "POST",
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { insertSub };
export { deleteSub };
export { searchSub };
