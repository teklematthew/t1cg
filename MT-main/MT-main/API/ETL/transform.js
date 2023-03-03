export const transform = (users) => {
  return {
    id: users.id,
    name: users.name,
    username: users.username,
    email: users.email,
    phoneNumber: users.phone,
  };
};
