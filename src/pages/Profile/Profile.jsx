import axios from "axios";
import { useEffect, useState } from "react";
import customInstance from "../../axios_http_client";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGYwNzEzYzAzZjRiNzMxZmZlM2MxMCIsImlhdCI6MTcyNTg5MjM3MiwiZXhwIjoxNzI4NDg0MzcyfQ.Ttw-YGZQQoDKX4zz_n-as0SDvld1gZJq4c9wffAJgFU";

const profileUrl = "/api/v1/auth/me";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetch() {
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const { data } = await customInstance.get(profileUrl, { headers });

      setUser(data.data);
    }

    fetch();
  }, []);

  return (
    <div className="w-1/3 mt-24 mx-auto p-16 rounded-xl border">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div>
          <img
            src="https://reqres.in/img/faces/6-image.jpg"
            className="rounded-xl"
          />
        </div>
        <p className="text-gray-800 font-extralight">
          Name: <span className="text-blue-700 font-bold">{user.name}</span>
        </p>
        <p className="text-gray-800 font-extralight">
          Role: <span className="text-blue-700 font-bold">{user.role}</span>
        </p>
        <p className="text-gray-800 font-extralight">
          Email: <span className="text-blue-700 font-bold">{user.email}</span>
        </p>
      </div>
    </div>
  );
}

export default Profile;
