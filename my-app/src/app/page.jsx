// components/LoginSection.js
"use client";
import { useState } from "react";
import React from "react";
import styles from "../app/page.module.css";
import { Container, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const LoginSection = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    const url = 'http://sneakersbandung.hzgecqhehxbtanhv.southeastasia.azurecontainer.io/token';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    const body = new URLSearchParams({
      'grant_type': '',
      'username': username,
      'password': password,
      'scope': '',
      'client_id': '',
      'client_secret': '',
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        window.alert(`HTTP error! Status: ${response.status}`);
      }
      else{
        router.push("http://sneakersbandung.hzgecqhehxbtanhv.southeastasia.azurecontainer.io/docs")
      }
    } catch (error) {
      window.alert(`Failed to login : ${error}`)
    }
  };

  return (
    <section className={`${styles["gradient-custom"]} vh-100`}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your username and password!
                  </p>

                  <Form className="py3">
                    <Form.Group controlId="formBasicUsername" className="my-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="my-3">
                      <Form.Label className="mt-2">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                  </Form>

                  <button
                    className="btn btn-outline-light btn-lg px-5 mt-5"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>

                <div>
                  <p className="mb-0">
                    Don&apos;re t have an account? <span></span>
                    <a href="/register" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
