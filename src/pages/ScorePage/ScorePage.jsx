import { useEffect, useState } from "react";
import NavClub from "../../components/NavClub/NavClub";
import { Score } from "../../components/Score/Score";
import { ContainerScorePage } from "./styled.ScorePage";
import axios from 'axios'
import {URLAPI} from '../../common/constants/URLAPI'
import {useRequestData} from '../../hooks/useRequestData'
export function ScorePage (){
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
       
        setUser(response.data.result);
        setUserId(response.data.result.idProfile);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const [score, scoreLoading, scoreError] = useRequestData(
    `${URLAPI}score?q=${userId}`,
    [userId]
  );

  console.log(score)

  useEffect(() => {
    setLoading(scoreLoading);
    setError(scoreError);
  }, [scoreLoading, scoreError]);

    return(
        <ContainerScorePage>
            <NavClub/>
            <Score data={score[0]}/>
        </ContainerScorePage>
    )
}