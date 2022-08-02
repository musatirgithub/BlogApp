import { createContext } from 'react';
import { useFetch } from '../helpers/firestoreFunctions';

export const BlogContext = createContext();
//* with custom hook
// export const useAuthContext = () => {
//   return useContext(AuthContext)
// }

const BlogContextProvider = ({ children }) => {
  const {blogs, isLoading} = useFetch();
console.log(isLoading);
console.log(blogs);
  return (
    <BlogContext.Provider value={{ blogs, isLoading }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;