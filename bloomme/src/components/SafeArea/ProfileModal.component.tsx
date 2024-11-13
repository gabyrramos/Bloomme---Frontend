import { useEffect, useState } from "react";
import { useUserConnection } from "../../services/User.service";
import userUpdateModal from "../../services/userUpdateModal.service";
import cancelX from "../../assets/safearea/cancelX.png";
import saveicon from "../../assets/safearea/saveicon.png";
import toolsbunny from "../../assets/safearea/toolsbunny.png";
import servicesarrow from "../../assets/servicesarrow.png";
import "../../styles/SafeArea/profilemodal.style.css";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface FormData {
  username: string;
  password: string;
  age: number;
  country: string;
  assistant_name: string;
}

function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { userIdApi } = useUserConnection();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    age: 0,
    country: '',
    assistant_name: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  const fetchUserData = async() => {
    try {
      const data = await userIdApi();
      setFormData({
        username: data.username || '',
        country: data.country || '',
        age: data.age || 0,
        password: data.password || '',
        assistant_name: data.assistant_name || '',
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };
  useEffect(() => {
    if (isOpen) {
      fetchUserData();
    }
  }, [isOpen]);

  const handleEditToggle = () => {
    if (isEditing) {
      handleSave();
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSave = async() => {
    try {
      await userUpdateModal(formData);
      setIsEditing(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error inesperado';
      throw new Error(errorMessage);
    }
  };

  return (
    <div className={`profile-modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="profile-modal">
        <button className="close-button" onClick={onClose}>
          <img src={cancelX} alt="Close" />
        </button>
        <h2>Profile</h2>
        <img src={servicesarrow} alt="Service Arrow" className="servicearrow"/>
        <form className="profile-form">
          <div className="profileform-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileform-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileform-group">
            <label>Edad</label>
            <input
              type="number"
              name="age"
              value={formData.age || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileform-group">
            <label>País</label>
            <input
              type="text"
              name="country"
              value={formData.country || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="profileform-group">
            <label>Assistant Name</label>
            <input
              type="text"
              name="assistant_name"
              value={formData.assistant_name || ''}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </form>
        <div className="profilemodal-buttons">
          <button
            className="profilesave-btn"
            onClick={handleEditToggle}
          >
            <img src={saveicon} alt="Save Icon" />
            {isEditing ? 'Save' : 'Edit'}
          </button>
          {isEditing && (
            <button
              className="profilecancel-btn"
              onClick={() => setIsEditing(false)}
            >
              <img src={cancelX} alt="Cancel Icon" />
              Cancel
            </button>
          )}
        </div>
        <img src={toolsbunny} alt="Tools Bunny" className="tools-bunny" />
      </div>
    </div>
  );
}

export default ProfileModal;