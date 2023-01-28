import axios from "axios";
import style from "../styles/CreatePlaylist.module.css";
import { FcFullTrash } from "react-icons/fc";
import { useEffect, useState } from "react";
import "react-bootstrap";

const baseUrl = "http://localhost:3001/";

export const CreatePlaylist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const deletePost = async (id) => {
    try {
      axios.delete(baseUrl + "playlists", {
        name: name,
        description: desc,
      });

      const temp = playlist.filter((item) => item._id !== id);
      setPlaylist(temp);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    axios.get(baseUrl + "playlists").then((response) => {
      setPlaylist(response.data);
      console.log("playlist", response.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  function addPlaylist() {
    if (name && desc) {
      axios
        .post(baseUrl + "playlists", {
          name: name,
          description: desc,
        })
        .then((response) => {
          console.log(response.data);
        });
    } else console.log("something else");
  }

  return (
    <div className={style.createPlaylist}>
      <div className={style.row}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button onClick={addPlaylist}>Add</button>
      </div>
      {playlist.map((playlist, index) => (
        <div className={style.card}>
          <div>
            <h3>{playlist.name}</h3>
            <p>{playlist.desc}</p>
            <button
              onClick={() => {
                deletePost();
              }}
            >
              <div>
                <FcFullTrash style={{ width: 35, height: 35 }} />
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
