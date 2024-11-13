import { Title } from "../components/Title.component";
import { Assistant } from "../components/Assistant.component";
import "../styles/MyProgress.style.css";
import { useUserConnection } from "../services/User.service";
import { useEffect, useState } from "react";
import { Reward } from "../models/MyProgress.model";
import SafeAreaHeader from "../components/SafeArea/safeareaheader.component";
import { fetchRewardsApi, getAllRewardsApi, getUserRewardsApi, getUserUnlockedRewardsApi } from "../services/MyProgress.service";

export const MyProgress = () => {
  const [filteredRewards, setFilteredRewards] = useState<Reward[]>([]);
  const [availableRewards, setAvailableRewards] = useState<Reward[]>([]);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [point, setPoint] = useState(0);
  const [quiz, setQuiz] = useState(0);
  const [available, setAvailable] = useState(0);

  const { userIdApi, userApiPoint } = useUserConnection();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const name = localStorage.getItem("username");
    const avatar = localStorage.getItem("avatar");
    setName(name || "");
    setAvatar(avatar || "");
    fetchRewards();
    getRewards();
    getAvailableRewards();
    handleUserData();
  }, []);

  const handleUserData = async() => {
    const getUsers = await userIdApi();
    const getUserPoint = await userApiPoint();
    const userPoints = getUsers.total_point;
    const userQuiz = getUsers.quiz_completed;
    const userAvailable = getUserPoint;

    setPoint(userPoints);
    setQuiz(userQuiz);
    setAvailable(userAvailable);
  };

  const fetchRewards = async() => {
    const data = await fetchRewardsApi();
    setRewards(data.rewards || []);
  };
  const handleClickInsert = async(reward_id: number) => {
    try {
      const response = await fetch(
        `https://bloomme-backend.onrender.com/api/user-reward?reward_id=${reward_id}&reward_type=avatar`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Error processing reward");
      }

      const data = await response.json();
      console.log("Processed reward:", data);

      fetchRewards();
      setAvailableRewards((prevRewards) =>
        prevRewards.filter((reward) => reward.reward_id !== reward_id),
      );
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unexpected error';
      throw new Error(errorMessage);
    }
  };
  const handleImageClick = async (rewardId: number) => {
    setFilteredRewards((prevRewards) =>
      prevRewards.filter((reward) => reward.reward_id !== rewardId),
    );
    try {
      if (!token) {
        return;
      }
      const response = await fetch(
        `https://bloomme-backend.onrender.com/api/select-reward/${rewardId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      const profileResponse = await fetch(
        `https://bloomme-backend.onrender.com/api/profile`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!profileResponse.ok) {
        throw new Error(`Error getting profile: ${profileResponse.statusText}`);
      }
      const profileData = await profileResponse.json();
      const currentAvatar = profileData.current_avatar;
      localStorage.setItem("current_avatar", currentAvatar);
      localStorage.setItem("avatar", currentAvatar);
      setAvatar(currentAvatar);
    } catch (error) {
      const errorMessage = error instanceof Error? error.message : 'Unexpected error';
      throw new Error(errorMessage);
    }
  };

  const getRewards = async() => {
    const allRewards = await getAllRewardsApi();
    const avatarRewards = allRewards.filter( (reward) => reward.type === "avatar" );
    const userRewards = await getUserRewardsApi();
    const availableRewards = avatarRewards.filter( (reward: Reward) => !userRewards.rewards.some( (userReward: Reward) => userReward.reward_id === reward.reward_id ) );
    setFilteredRewards(availableRewards);
  };


  const getAvailableRewards = async() => {
    const data = await getUserUnlockedRewardsApi();
    const availableRewardsData = data.rewards;
    if (Array.isArray(availableRewardsData)) {
      setAvailableRewards(availableRewardsData);
    }  else {
      setAvailableRewards([]);
    }
  };
  return (
    <>
      <div className="container-progress">
        <div className="container-progress-menu">
          <SafeAreaHeader />
        </div>
        <div className="container-progress-title">
          <Title title="My progress" />
        </div>
        <div className="container-progress-profileStat">
          <div className="progress-profile-section">
            <img src={avatar} alt="avatar" className="profile-avatar" />
            <p className="progress-profile-name">{name}</p>
          </div>
          <div className="progress-stats-section">
            <div className="progress-stat-item">
              <p className="progress-stat-value">{point}</p>
              <p className="progress-stat-label">Total points</p>
            </div>
            <div className="progress-stat-item">
              <p className="progress-stat-value">{quiz}</p>
              <p className="progress-stat-label">Quizzes Completes</p>
            </div>
            <div className="vertical-line"></div>
            <div className="progress-stat-item">
              <p className="progress-stat-value">{available}</p>
              <p className="progress-stat-label"> Points available</p>
            </div>
          </div>
        </div>
        <div className="progress-achievements-section">
          <div className="progress-unlocked">
            <p>Unlocked</p>
            <div className="progress-avatars">
              {rewards.map((reward) => (
                <img
                  key={reward.reward_id}
                  src={reward.image}
                  alt={`Recompensa ${reward.reward_id}`}
                  onClick={() => handleImageClick(reward.reward_id)}
                />
              ))}
            </div>
          </div>
          <div className="progress-upcoming flex flex-col items-center">
            <div className="flex flex-col items-center mb-4 xl:mb-0 xl:mr-4">
              <p>Available Rewards</p>
              <div className="progress-avatars flex flex-wrap justify-center">
                {Array.isArray(availableRewards) &&
                  availableRewards.map((reward) => (
                    <div key={reward.reward_id} className="avatar-item">
                      <img
                        src={reward.image}
                        alt="unlocked avatar"
                        className="progress-unlocked"
                        onClick={() => handleClickInsert(reward.reward_id)}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p>Rewards</p>
              <div className="flex justify-center flex-wrap">
                {filteredRewards.map((reward) => (
                  <div key={reward.reward_id} className="reward-item">
                    <img
                      src={reward.image}
                      alt="avatar"
                      className="reward-image"
                    />
                    <p className="reward-points">
                      {reward.required_points} Points
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="progress-assistant-section">
          <Assistant text="How can I help you?" />
        </div>
      </div>
    </>
  );
};
