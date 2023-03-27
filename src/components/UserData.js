import api from '../services/api';
import React, { useEffect, useState } from 'react'

export const UserData = ({ userId }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get(`/users/${userId}`);
      setUser(res.data)
    }
    fetch();
  }, [])

  return (
    <>
      {
        (!user) ? <p>Not found</p> : (
          <p>{user.name}</p>
        )
      }
    </>
  )
}
