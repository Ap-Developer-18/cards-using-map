const { default: Icons } = require("@/components/icons/Icons");

const DATA_RIGHT_NOW = [
  {
    imageUrl: "/assets/images/png/popular-one.jpg", // Use absolute path
    mainHeading: "Fortnite",
    subHeading: "Sandbox",
    ratingSvg: (
      <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
    ),
    ratingNumber: "4.8",
    downloadSvg: <Icons iconName="download" />,
    downloadNumber: "2.3M",
  },
];

export default DATA_RIGHT_NOW;
