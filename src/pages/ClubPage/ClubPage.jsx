import React, { useEffect, useState } from 'react';
import { ContainerClubPage } from './styled.ClubPage';
import { FaUserCog, FaUserCircle, FaOpencart } from 'react-icons/fa';
import { BsFillBookmarkCheckFill, BsTrophy } from 'react-icons/bs';
import { Loader } from '../../components/Loader/Loader';
import { ErrorDisplay } from '../../components/ErrorDisplay/ErrorDisplay';
import axios from 'axios';
import { URLAPI } from '../../common/constants/URLAPI';
import HomeProfile from '../../components/HomeProfile';
import {useRequestData} from '../../hooks/useRequestData'
import { handlePurchases , handleScore, handleGifts} from '../../router/coordinator';
import { useNavigate } from 'react-router-dom';
import PurchasesPage from '../PurchasesPage/PurchasesPage';
import NavClub from '../../components/NavClub/NavClub';
export default function ClubPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${URLAPI}AUTH/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Response data:', response.data); 
        setUser(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(true);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

return(
    <ContainerClubPage>
      <NavClub/>
      <section className='section1'>
          <HomeProfile
            user={user}
            loading={loading}
            error={error}
          />

      </section>
    </ContainerClubPage>
  );
}
