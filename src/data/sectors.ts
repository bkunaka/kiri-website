export interface Sector {
  id: string;
  title: string;
  icon: string;

  desktop: {
    left: string;
    top: string;
  };

  mobile: {
    left: string;
    top: string;
  };

  animationDelay: string;
}

export const sectors: Sector[] = [
  {
    id: "transportation",
    title: "Transportation",
    icon: "/icons/transportation.png",
    desktop: {
      left: "17%",
      top: "10%",
    },
    mobile: {
      left: "25%",
      top: "28%",
    },
    animationDelay: "0s",
  },
  {
    id: "commerce",
    title: "Commerce",
    icon: "/icons/commerce.png",
    desktop: {
      left: "35%",
      top: "10%",
    },
    mobile: {
      left: "75%",
      top: "28%",
    },
    animationDelay: "0.8s",
  },
  {
    id: "payments",
    title: "Payments",
    icon: "/icons/payments.png",
    desktop: {
      left: "64%",
      top: "16%",
    },
    mobile: {
      left: "25%",
      top: "51%",
    },
    animationDelay: "1.6s",
  },
  {
    id: "government",
    title: "Government",
    icon: "/icons/government.png",
    desktop: {
      left: "49%",
      top: "22%",
    },
    mobile: {
      left: "75%",
      top: "51%",
    },
    animationDelay: "2.4s",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: "/icons/healthcare.png",
    desktop: {
      left: "65%",
      top: "60%",
    },
    mobile: {
      left: "25%",
      top: "75%",
    },
    animationDelay: "3.2s",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    icon: "/icons/agriculture.png",
    desktop: {
      left: "50%",
      top: "62%",
    },
    mobile: {
      left: "46%",
      top: "52%",
    },
    animationDelay: "4s",
  },
  {
    id: "education",
    title: "Education",
    icon: "/icons/education.png",
    desktop: {
      left: "76%",
      top: "36%",
    },
    mobile: {
      left: "50%",
      top: "90%",
    },
    animationDelay: "4.8s",
  },
];