import React from "react";

export default function Bio() {
  const styleObject = { color: "black", textAlign: "center" };

  return (
    <div style={styleObject} className="banner-text" id="bio">
      <h1 style={{ marginTop: "40px" }}> Bio </h1>
      <p style={{ fontWeight: "bold", fontSize: "60px" }}>hbh</p>
      <p>developure full stack js</p>
      <p>
    
        
        <br />

        Base de données:
        <br />
        MongoDB, MySQL, SQL server, PostgreSQL.
        <br />
        Langages:
        <br />
        Java8, C, C++, C#,Python, R Studio, Maple ,HTML 5 ,CSS ,JavaScript ,PHP.
       
      </p>
    </div>
  );
}