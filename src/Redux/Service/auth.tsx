import axios from 'axios';

const Auth = async (username: any, password: any) => {
  // try {
  //     const result = await axios.get("/auth/login", data)
  //     console.log(result)
  //     return result
  //     } catch (error) {
  //      return error
  //     }
  // }
  let option = {
    url: 'http://localhost:3009/auth/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      username: username,
      password: password,
    },
  };

  try {
    let result = await axios(option);
    return result.data;
  } catch (error) {
    return error;
  }
};

const ApiAuth = {
  Auth,
};

export default ApiAuth;
