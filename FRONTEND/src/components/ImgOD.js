import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ImgOD() {
  return (
    <div>
      <section className="img-of-day">
        <Link className="img-of-dtext" to="/nasa">
          Image of The Day
        </Link>
      </section>
    </div>
  );
}

export default ImgOD;
