import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/api";
import { Table } from "react-bootstrap";

const Kosar = () => {
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]"),
  );
  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzak(res.data))
      .catch(() => console.log("Hiba"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  return (
    <>
      <h1>Kosár tartalma</h1>
      {kosar.length > 0 ? (
        <>
          <Table striped bordered hover>
            <thead>
              <th>Név</th>
              <th>Ár</th>
            </thead>
            <tbody>
              {kosar.map((id) => {
                const pizza = pizzak.find((p) => p.id == id);

                return (
                  <tr>
                    <td>{pizza?.nev}</td>
                    <td>{pizza?.ar} Ft</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        <h2>A kosár tartalma üres</h2>
      )}
    </>
  );
};
export default Kosar;
