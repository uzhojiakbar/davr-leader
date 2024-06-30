import React, { useEffect, useRef, useState } from "react";
import { LoginPage } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Card, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import text from "../../mock/text";
import axios from "axios";

const Login = () => {
  const [loading, setLoading] = useState(0);

  const UsernameRef = useRef({});
  const PassRef = useRef({});
  const nav = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("login") !== "true") {
      nav("/");
    }
  }, []);

  const checkUser = async () => {
    setLoading(1);

    try {
      const res = await axios.get("http://localhost:4000/api/admin");

      const user = UsernameRef.current.input.value;
      const pass = PassRef.current.input.value;

      if (!user.length || !pass.length) {
        console.log("Barcha maydonlarni toldiring");
        setLoading(0);
        return;
      }

      if (user === res.data.login && pass === res.data.pass) {
        localStorage.setItem("login", true);
        nav("/");
        document.location.reload();
        setLoading(0);
        return;
      }
      console.log("Nimadur Xato");
      console.log(res.data);
    } catch (error) {
      console.log("Login error: ", error);
    }

    setLoading(0);
  };

  return (
    <LoginPage>
      <Card className="card-box">
        <div className="card">
          <h1>{text.loginTitle}</h1>
          <div className="inputs">
            <Input
              ref={UsernameRef}
              className="input"
              placeholder={text.enterLogin}
            />
            <Input.Password
              ref={PassRef}
              className="input"
              placeholder={text.enterPassword}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <Button onClick={checkUser} type="primary">
              {text.LoginSubmit}
            </Button>
          </div>
        </div>
        {loading ? (
          <div className="loaderWindow">
            <div className="loader"></div>
          </div>
        ) : (
          ""
        )}
      </Card>
    </LoginPage>
  );
};

export default Login;
