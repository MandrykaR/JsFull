export const getUsersBlogs = users => {
   const fetchUserBlog = async userId => {
      try {
         const response = await fetch(`https://api.github.com/users/${userId}`);
         if (!response.ok) {
            throw new Error(`Error fetching blog for user ${userId}: ${response.statusText}`);
         }
         const userData = await response.json();
         return userData.url;
      } catch (error) {
         throw new Error(error.message);
      }
   };

   return Promise.all(users.map(fetchUserBlog));
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList));
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList));