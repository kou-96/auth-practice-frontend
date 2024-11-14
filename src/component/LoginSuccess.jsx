import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginSuccess = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("BearerToken");

      if (!token) {
        setError("トークンが見つかりませんでした。");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(response.data);
      } catch (err) {
        setError("ユーザー情報の取得に失敗しました.");
        console.error(err);
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div>
        <h2>User Profile</h2>
        <pre>{JSON.stringify(userInfo, null, 2)}</pre>
      </div>
      <div>
        <Link to="/">戻る</Link>
      </div>
    </>
  );
};

export default LoginSuccess;
