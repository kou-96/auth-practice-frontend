import RegisterBackgroundvideo from "../assets/register_slash.mp4";

const RegisterBackground = () => {
  return (
    <div>
      <video autoPlay loop muted className="video-background">
        <source src={RegisterBackgroundvideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default RegisterBackground;
