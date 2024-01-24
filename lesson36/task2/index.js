export const getUsersBlogs = users => {
   const fetchUserBlog = userId => fetch(`https://api.github.com/users/${userId}`)
      .then(response => {
         if (!response.ok) {
            throw new Error(`Error fetching blog for user ${userId}: ${response.statusText}`);
         }
         return response.json();
      });

   const fetchBlogs = async () => {
      try {
         const promises = users.map(userId => fetchUserBlog(userId));
         const responses = await Promise.all(promises);

         return responses.map(userData => userData.blog);
      } catch (error) {
         throw new Error(error.message);
      }
   };

   return fetchBlogs();
};

getUsersBlogs(['google', 'facebook', 'reactjs'])
   .then(linksList => console.log(linksList))
   .catch(error => console.error(error.message));

getUsersBlogs(['microsoft'])
   .then(linksList => console.log(linksList))
   .catch(error => console.error(error.message));