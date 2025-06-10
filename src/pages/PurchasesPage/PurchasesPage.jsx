import { useState, useEffect } from "react";
import { PurchasesContainer } from "./styled.PurchasePage";
import { URLAPI } from "./../../common/constants/URLAPI";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { PurchasesTable } from "../../components/PurchasesTable/PurchasesTable";
import { Loader } from "./../../components/Loader/Loader";
import { ErrorDisplay } from "./../../components/ErrorDisplay/ErrorDisplay";
import axios from "axios"; // Make sure to import axios

export default function PurchasesPage() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${URLAPI}AUTH/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Response data:", response.data);
        setUser(response.data.result);
        setUserId(response.data.result.id ?? "");
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const [purchases, purchasesLoading, purchasesError] = useRequestData(
    `${URLAPI}purchases?q=${userId}`,
    [userId]
  );

  useEffect(() => {
    setLoading(purchasesLoading);
    setError(purchasesError);
  }, [purchasesLoading, purchasesError]);

  return (
    <PurchasesContainer>
      <h2>Compras Realizadas</h2>
      <div className="div50">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay />
        ) : (
          <div>
            <div>
              {purchases.length > 0 ? (
                <PurchasesTable purchases={purchases} />
              ) : (
                <div className="no-purchases">
                  <p>Nenhuma Compra Cadastrada</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </PurchasesContainer>
  );
}
