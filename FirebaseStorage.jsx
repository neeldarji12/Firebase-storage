// FirebaseStorage.jsx
import React, { useState } from "react";
import { storage } from "./Firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export default function FirebaseStorage() {

  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState("");

  // Handle File Change
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Upload File
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const storageRef = ref(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setImageURL(url);
      alert("File Uploaded Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Delete File
  const handleDelete = async () => {
    if (!imageURL) return;

    const storageRef = ref(storage, imageURL);

    try {
      await deleteObject(storageRef);
      setImageURL("");
      alert("File Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Firebase Storage Example</h2>

      <input type="file" onChange={handleChange} />
      <br /><br />

      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>

      <br /><br />

      {imageURL && (
        <img src={imageURL} alt="Uploaded" width="300" />
      )}
    </div>
  );
}// FirebaseStorage.jsx
import React, { useState } from "react";
import { storage } from "./Firebase";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export default function FirebaseStorage() {

  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState("");

  // Handle File Change
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Upload File
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const storageRef = ref(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setImageURL(url);
      alert("File Uploaded Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // Delete File
  const handleDelete = async () => {
    if (!imageURL) return;

    const storageRef = ref(storage, imageURL);

    try {
      await deleteObject(storageRef);
      setImageURL("");
      alert("File Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Firebase Storage Example</h2>

      <input type="file" onChange={handleChange} />
      <br /><br />

      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>

      <br /><br />

      {imageURL && (
        <img src={imageURL} alt="Uploaded" width="300" />
      )}
    </div>
  );
      }
