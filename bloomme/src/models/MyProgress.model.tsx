export interface Reward {
    reward_id: number;
    image: string;
    imageHash: string;
    required_points: number;
    type: string;
  }
export interface TokenPayload {
    user_id: number; // Asegúrate de que el tipo coincida con lo que realmente esperas del payload
  }
