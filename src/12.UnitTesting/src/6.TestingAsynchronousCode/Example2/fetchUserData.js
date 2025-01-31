export const fetchUserData = async (userId) => {
    if (userId === "invalid") {
      return Promise.reject("User not found");
    }
  
    return Promise.resolve({ id: userId, name: "John Doe" });
};