// eslint-disable-next-line no-undef
const url = `http://localhost:${process.env.PORT || 7000}`

// User part
export const postUser = async (user) => {
  return await fetch(`${url}/api/user/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user
    })
  })
}

export const getUser = async (user) => {
  return await fetch(`${url}/api/user`, {
    method: "GET",
    headers: {
      email: user.email,
      password: user.password,
      "Content-Type": "application/json",
    }
  })
}

// export const updateUser = async (user) => {
//   return await fetch(`${url}/api/quiz/`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: user.name,
//       surname: user.surname,
//       email: user.email,
//       password: user.password,
//       id: user.id,
//     })
//   })
//     .then(res => res.json()).then(json => json).catch(err => err);
// }
export const resetUserName = async (user) => {
  return await fetch(`${url}/api/user/name`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: user.name,
      id: user.id
    })
  })
}
export const resetUserSurname = async (user) => {
  return await fetch(`${url}/api/user/surname`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      surname: user.surname,
      id: user.id
    })
  })
}
export const resetUserPassword = async (user) => {
  return await fetch(`${url}/api/user/password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: user.password,
      id: user.id
    })
  })
}

export const destroyUser = async (userId) => {
  return await fetch(`${url}/api/quiz/destroy/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: userId
    })
  })
    .then(res => res.json()).then(json => json).catch(err => err);
}
