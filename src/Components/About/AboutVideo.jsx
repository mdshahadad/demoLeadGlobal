import roadMap from "../../assets/videos/Road_map.mp4";

const AboutVideo = () => {
  return (
    <div>
      <video
        className="border-2 border-[#df3a3a]"
        autoPlay
        muted
        loop
        width="500px"
        height="400px"
      >
        <source src={roadMap} type="video/mp4" />
      </video>
    </div>
  );
};

export default AboutVideo;
