"use client";

import LoginForm from './LoginForm'

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm localState={true} />
    </div>
  );
}
