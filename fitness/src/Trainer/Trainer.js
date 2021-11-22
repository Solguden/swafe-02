import React, { useState, useEffect } from "react";
import { getData } from "../util/api";
import './Trainer.css'
// import Spinner from "./ui/Spinner";
// import axios from 'axios';

export function Trainer() {

  // const [users, setUsers] = useState({ hits: [] });
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios(
  //         "http://localhost:3001/users",
  //     );
  //     setUsers(result.data);
  //     console.log(users)
  //   };
  //   fetchData();
  //   console.log(users.hits)
  // }, []);

  const [users, setUsers] = useState(null);

  //   useEffect(() => {
  //     fetch("http://localhost:3001/users")
  //     .then(resp => resp.json())
  //     .then(data => setUsers(data));
  // }, []);

    useEffect(() => {
      async function getUsers() {
        const userresp = await getData("http://localhost:3001/users");
        const userdata = await (userresp);
        setUsers(userdata);
      }
      getUsers();
    }, []);

    const [workouts, setWorkouts] = useState(null);
    useEffect(() => {
      async function getWorkouts() {
        const workoutresp = await getData("http://localhost:3001/bookables");
        const workoutdata = await (workoutresp);
        setWorkouts(workoutdata);
      }
      getWorkouts();
    }, []);


  if (users === null || workouts === null) {
    return <p>Trainer (Found nothing/Loading)</p>
    //<Spinner />
  }
  return (
    // <p>users</p>
    <main>
      <p>Clients</p>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      <button type="button">Add new Client</button>
      <p>Workouts</p>
      <ul>
        {workouts.map(w => (
          <li key={w.id}>{w.title}</li>
        ))}
      </ul>
    </main>
  );
}