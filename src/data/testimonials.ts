export interface Testimonial {
  id: number;
  name: string;
  role: string;
  branch: string;
  text: string;
  rating: number;
  stayDuration: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Software Engineer at MEPZ",
    branch: "West Tambaram Branch",
    text: "Staying at the West Tambaram branch for 14 months now. The high-speed Wi-Fi and quiet study/work atmosphere make remote shifts seamless. Homely South Indian meals 3 times a day have saved me immense hassle.",
    rating: 5,
    stayDuration: "14 months resident",
  },
  {
    id: 2,
    name: "Karthik Subramanian",
    role: "B.Tech Student, Bharath University",
    branch: "Selaiyur (Bharathi Nagar) Branch",
    text: "Just 5 minutes travel to campus. The room is spacious with a personal steel wardrobe and study desk. Biometric entry and covered bike parking give peace of mind.",
    rating: 5,
    stayDuration: "2nd year resident",
  },
  {
    id: 3,
    name: "Vigneshwaran M.",
    role: "MCC College Student",
    branch: "East Tambaram Branch",
    text: "Very convenient location near Tambaram station. RO drinking water on every floor and daily room sweeping. AC cooling is powerful during Chennai summers.",
    rating: 5,
    stayDuration: "1st year resident",
  },
  {
    id: 4,
    name: "Arun Prakash",
    role: "Data Analyst, OMR Corridor",
    branch: "Madampakkam Branch",
    text: "Clean environment with proper ventilation. The food quality has been consistently healthy and hygienic. Management is easily reachable via WhatsApp whenever maintenance is needed.",
    rating: 5,
    stayDuration: "10 months resident",
  },
  {
    id: 5,
    name: "Suresh Raghavan",
    role: "Competitive Exam Aspirant",
    branch: "Tambaram Sanitorium Branch",
    text: "Calm surroundings without traffic noise, which was crucial for my exam preparation. Power backup and clean bathrooms are well maintained.",
    rating: 4,
    stayDuration: "6 months resident",
  },
];
