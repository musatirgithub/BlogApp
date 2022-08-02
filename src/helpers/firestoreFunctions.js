import firebase from "./firebase"
import { db } from "./firebase";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
  } from "firebase/firestore";
import {useState,useEffect} from "react"
import toast from 'react-hot-toast';

export const useFetch=()=>{
     const [isLoading,setIsLoading]=useState(true);
     const [blogs,setBlogs]=useState();
     const usersCollectionRef = collection(db, "blogs");
    useEffect(() => {
        const getBlogs = async ()=>{
            const data = await getDocs(usersCollectionRef);
            setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setIsLoading(false);
            console.log(blogs);  
        }
        getBlogs();
    },[])
    return {isLoading,blogs}
}

  export const createBlog = async (definition, displayName, title, uid, url ) => {
    const usersCollectionRef = collection(db, "blogs");
    await addDoc(usersCollectionRef, {
      definition: definition,
      displayName:displayName,
      likers:['null'],
      title: title,
      uid:uid,
      url: url
    });
  };

  export const bringBlog = async (id, name, phone, gender) => {
    // setName(name);
    // setPhone(phone);
    // setGender(gender);
  };

  
  export  const updateBlog = async (blogId, title, url, definition) => {
    const blogsDoc = doc(db, "blogs", blogId);
    const newFields = { 'title':title, 'url': url, 'definition': definition };
    await updateDoc(blogsDoc, newFields);
  };

  export  const updateLikes = async (blogId, likers, uid) => {
    const blogsDoc = doc(db, "blogs", blogId);
    const newFields = {'likers': [...likers, uid]};
    await updateDoc(blogsDoc, newFields);
    
  };

  export  const deleteBlog = async (id) => {
    const blogsDoc = doc(db, "blogs", id);
    await deleteDoc(blogsDoc);
    // getContacts();
  };