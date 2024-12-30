"use client";

import Image from "next/image";
import { Axios } from "axios";
import { useState, useEffect } from "react";

export default function Button() {
  const FetchMovie = () => {
    console.log("Sexy beast");
  };

  return (
    <div>
      <button onClick={FetchMovie}>Get Movie</button>
    </div>
  );
}
