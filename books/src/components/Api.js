const URL = "http://localhost:8080/api/books";

const GetBooks = async () => {
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const DeliteBook = async (id) => {
 const newUrl = URL + "/" + id;
  try {
    const response = await fetch(newUrl, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const PostBook = async (book) => {
    
  try {
    if (book !== "") {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: JSON.stringify(book),
      });
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const UpdateBook = async (id,book) => {
  if (id !== null && id !== undefined && id !== "") {
    URL += "/" + id;
  }
  try {
    const response = await fetch(URL, {
      method: "UPDATE",
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};



export { DeliteBook };

export { GetBooks };

export { PostBook };
export {UpdateBook};
