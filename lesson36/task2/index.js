export const getUsersBlogs = users => {
   const fetchUserBlog = userId => fetch(`https://api.github.com/users/${userId}`);

   const fetchBlogs = async () => {
      const promises = users.map(userId => fetchUserBlog(userId));
      const res = await Promise.all(promises);

      return Promise.all(res.map(res => res.json().then(userData => userData.html_url)));
   };

   return fetchBlogs();
};

// Примеры использования
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList));
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList));