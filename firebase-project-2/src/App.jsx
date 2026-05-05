import { addDoc, collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { db } from './Firebase'

const App = () => {

  async function addBlog(title, desc) {
    try {
      let response = await addDoc(collection(db, "Blogs"), {
        title,
        desc
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  async function readBlog() {
    try {
      let blog = await getDocs(collection(db, "Blogs"));

      // blog._snapshot.docChanges.forEach((element) => {
      //   console.log(element.doc.data.value.mapValue.fields.title);
      // });

      blog.forEach((doc) => {
        let data = doc.data();
        console.log("title => " + data.title);
      });

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Firestore</h1>

      <button onClick={() => addBlog("first title", "first desc")}>
        Add Blog
      </button>

      <button onClick={readBlog}>
        Read Blog
      </button>
    </div>
  )
}

export default App